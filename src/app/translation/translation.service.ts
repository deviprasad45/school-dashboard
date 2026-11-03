import {
  Injectable,
  signal
} from '@angular/core';

import {
  Language,
  TRANSLATIONS
} from './translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  currentLanguage = signal<Language>(
    this.getInitialLanguage()
  );

  translations = signal(
    TRANSLATIONS[this.currentLanguage()]
  );

  private languageHandler = (event: Event) => {

    const customEvent = event as CustomEvent<{
      language: Language
    }>;

    this.setLanguage(customEvent.detail.language);

  };

  constructor() {

    window.addEventListener(
      'school-language-change',
      this.languageHandler
    );

  }

  private getInitialLanguage(): Language {

    const language = localStorage.getItem(
      'school-language'
    );

    if (
      language === 'en' ||
      language === 'te' ||
      language === 'hi'
    ) {
      return language;
    }

    return 'en';

  }

  setLanguage(language: Language): void {

    this.currentLanguage.set(language);

    this.translations.set(
      TRANSLATIONS[language]
    );

  }

  translate(key: keyof typeof TRANSLATIONS.en): string {

    return this.translations()[key] ?? key;

  }

  destroy(): void {

    window.removeEventListener(
      'school-language-change',
      this.languageHandler
    );

  }

}