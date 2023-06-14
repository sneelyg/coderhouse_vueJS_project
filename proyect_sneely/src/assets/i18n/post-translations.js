const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const { default: axios } = require("axios");
const glob = require("glob-promise");

class PostTranslations {
  async authenticate() {
    const {
      TRANSLATIONS_USERNAME: username,
      TRANSLATIONS_PASSWORD: password
    } = process.env;
    console.log(username);
    console.log(password);
    console.log(process.env.TRANSLATIONS_API);

    const { data } = await axios.post(
      `${process.env.TRANSLATIONS_API}/auth/login`,
      {
        password,
        username
      }
    );
    this.accessToken = data.accessToken;
  }

  /**
   * Creates a common translation for all translations
   * @param {string} language The language this will be common to
   * @param {Object} translation The full JSON translation
   */
  async postCommonTranslation(language, translation) {
    if (!this.accessToken) {
      await this.authenticate();
    }
    return await axios.post(
      `${process.env.TRANSLATIONS_API}/translations/commons/${language}`,
      translation,
      {
        headers: {
          Authorization: `Bearer ${this.accessToken}`
        }
      }
    );
  }

  async findAllTranslations() {
    let translations = await glob("app/i18n/**/*.json");
    translations = translations
      .map(translation => {
        return translation.replace("app/i18n/", "").split("/");
      })
      .filter(translation => translation.length === 2);
    const readJsonFile = (prefix, suffixArray) => {
      return JSON.parse(
        fs.readFileSync(path.resolve(...prefix, ...suffixArray), "utf-8")
      );
    };
    for (const [language, fileName] of translations) {
      const translation = readJsonFile(["app", "i18n"], [language, fileName]);
      await this.postCommonTranslation(language, translation);
    }
  }
}

(async () => {
  try {
    const postTranslations = new PostTranslations();
    await postTranslations.authenticate();
    await postTranslations.findAllTranslations();
  } catch (error) {
    console.error(error);
  }
})();
