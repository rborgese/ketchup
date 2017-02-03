import msx from 'lib/msx';
import * as API from 'lib/api';

export default {
  controller: () => { },
  view: (_: any, settings: API.TLSSettingsReponse) => <div class='table'>
    <div class='tr tr--center'>
      <label>TLS Email</label>
      <input class='large' type='text' value={settings.tlsEmail} />
    </div>
    <div class='tr tr--center'>
      <label>TLS Domain</label>
      <input class='large' type='text' value={settings.tlsDomain} />
    </div>
    <div class='tr tr--center'>
      <label>TLS Agreement</label>
      <a href={settings.termsOfService}>link</a>
    </div>
    <div class='tr tr--center'>
      <label>Agreed On</label>
      <span>{settings.agreedOn}</span>
    </div>
  </div>
};