import { Injectable } from '@angular/core';
import { Constants } from './constants';

@Injectable()
export class UtilsService {
  SUPER_KEY = '!regal1234';
  KEY_REMEMBER_USERNAME = 'regalUserAuth';
  KEY_REMEMBER_PASSWORD = 'regalUserAuth2';
  constructor() {}

  containsObjectInArray(obj: any, array: any[]) {
    let i;
    for (i = 0; i < array.length; i++) {
      if (array[i] === obj) {
        return true;
      }
    }
    return false;
  }

  removeSafeStorage(key: string) {
    localStorage.removeItem(key);
  }

  getBrowserName() {
    const userAgent = window.navigator.userAgent;
    const msie = userAgent.indexOf('MSIE ');
    const trident = userAgent.indexOf('Trident/');
    const edge = userAgent.indexOf('Edge/');
    if (msie > 0 || trident > 0 || edge > 0) {
      return Constants.IE_BROWSER;
    }
    // Check if browser is Chrome or not
    else if (userAgent.search(Constants.CHROME_BROWSER) >= 0) {
      return Constants.CHROME_BROWSER;
    }
    // Check if browser is Firefox or not
    else if (navigator.userAgent.search(Constants.FIREFOX_BROWSER) >= 0) {
      return Constants.FIREFOX_BROWSER;
    }
    // Check if browser is Safari or not
    else if (
      navigator.userAgent.search(Constants.SAFARI_BROWSER) >= 0 &&
      navigator.userAgent.search('Chrome') < 0
    ) {
      return Constants.SAFARI_BROWSER;
    }
    // Check if browser is Opera or not
    else if (navigator.userAgent.search(Constants.OPERA_BROWSER) >= 0) {
      return Constants.OPERA_BROWSER;
    }

    return '';
  }

  isMobile() {
    if (
      /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      return true;
    }

    return false;
  }

  isTablet() {
    if (/iPad/i.test(navigator.userAgent)) {
      return true;
    }

    return false;
  }
}
