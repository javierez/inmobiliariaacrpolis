

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
    };
    phoneNumbers: {
      main: string;
      sales: string;
    };
    emailAddresses: {
      info: string;
      sales: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
};

export const getContactProps = (): ContactProps | null => {
  return {
  "title": "Contáctanos",
  "subtitle": "",
  "messageForm": true,
  "address": true,
  "phone": true,
  "mail": true,
  "schedule": true,
  "map": true,
  "offices": [{
  "id": "OlnINS_CmHQ_Co3xHJmpg",
  "name": "Inmobiliaria Acrópolis León",
  "address": {
  "street": "Calle Velázquez, 10",
  "city": "León",
  "state": "León",
  "country": "España"
},
  "phoneNumbers": {
  "main": "987218100",
  "sales": ""
},
  "emailAddresses": {
  "info": " acropolis_api@yahoo.es",
  "sales": ""
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: Mañana 9:00 - 14:00  Tarde 17:00 - 20:00",
  "saturday": "Sábados: 9:00 - 13:00",
  "sunday": "Domingos: Cerrado"
},
  "mapUrl": "https://maps.app.goo.gl/9ronQhh58QpgFezs9",
  "isDefault": true
}, {
  "id": "Km4KdwnVWrJq50Q1aEuPt",
  "name": "Inmobiliaria Acrópolis Benavente",
  "address": {
  "street": "Calle Francos 20, Benavente",
  "city": "Benavente",
  "state": "Zamora",
  "country": "España"
},
  "phoneNumbers": {
  "main": "980636364",
  "sales": ""
},
  "emailAddresses": {
  "info": "acropolis_api@yahoo.es",
  "sales": ""
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: Mañana 9:00 - 14:00  Tarde 17:00 - 20:00",
  "saturday": "Sábados: 9:00 - 14:00",
  "sunday": "Domingos: Cerrado"
},
  "mapUrl": "https://maps.app.goo.gl/ujWWxASWf392gsWH6",
  "isDefault": false
}, {
  "id": "XufjuUjcDPPj5C2irHErM",
  "name": "Inmobiliaria Acrópolis Bilbao",
  "address": {
  "street": " Calle Simón Bolívar 19",
  "city": "Bilbao",
  "state": "País Vasco",
  "country": "España"
},
  "phoneNumbers": {
  "main": "987218100",
  "sales": ""
},
  "emailAddresses": {
  "info": "acropolis_api@yahoo.es",
  "sales": ""
},
  "scheduleInfo": {
  "weekdays": "Lunes a Viernes: Mañana 9:00 - 14:00  Tarde 17:00 - 20:00",
  "saturday": "Sábados: 9:00 - 14:00",
  "sunday": "Domingos: Cerrado"
},
  "mapUrl": "https://share.google/DMKq1i2tc0K8ZcTDi",
  "isDefault": false
}]
};
}

