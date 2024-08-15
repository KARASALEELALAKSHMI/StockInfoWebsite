import Utility from './util.js';
import Do from './midlayer.js';

const Title = 'StockInfo';
const Description = 'This Demo illustrates features of StockInfo';

Utility.SetElementValue('lblTitle', Title);
Utility.SetElementValue('lblTitleDescription', Description);

setInterval(() => Do.DisplaySecurities(), 100000);

Do.DisplayRecommendations();
Do.setAvailableBalance();

const SecurityForm = Utility.GetElementById('frmsecurity');

Utility.AddEventListener('btnSubmitSecurity', 'click', (e) => { // 1. Replace bind method with AddEventListener method
  e.preventDefault();
  let newSecurity = Utility.FetchFormValues(SecurityForm);

  Do.AddSecurity(newSecurity)
    .then(successMessage => {
      console.log(successMessage);
      Utility.ResetFormValues(SecurityForm);
    })
    .catch(errorMessage => alert(errorMessage));
});

Do.setAvailableSecuritiesForBuyOrSell();
Do.enableFormResetWhenRequired(SecurityForm);
Do.setTransactionUtility();
