import { NAME_RANDOM } from "../utils/contants";
import { LASTNAME_RANDOM } from "../utils/contants";

function setName() {
  let Name = NAME_RANDOM[Math.floor(Math.random() * NAME_RANDOM.length)]
  let LastName = LASTNAME_RANDOM[Math.floor(Math.random() * LASTNAME_RANDOM.length)]
  return Name + ' ' + LastName
}

let Name_Full = '';

export function setResponse_cpf_regular(doc) {
  Name_Full = setName();
  return {
    status_code: 200,
    data: {
      Result: [
        {
          MatchKeys: "doc{" + doc + "}",
          BasicData: {
            TaxIdNumber: doc,
            TaxIdCountry: "BRAZIL",
            AlternativeIdNumbers: {
              "RG - PR": "138547965",
            },
            ExtendedDocumentInformation: {
              "RG - PR": {
                DocumentNumber: "138547965",
                DocumentLast4Digits: "7965",
                DocumentIssuingAgency: "SSP",
                DocumentIssuingStateCode: "PR",
                CreationDate: "2019-10-24T22:12:18.515Z",
                LastUpdateDate: "2019-10-24T22:12:18.515Z",
                Sources: ["MEI-RF"],
              },
            },
            Name: Name_Full + " CPF" + doc,
            Aliases: {
              CommonName: Name_Full + " CPF" + doc,
              StandardizedName: Name_Full + " CPF" + doc,
            },
            Gender: "M",
            NameWordCount: 5,
            NumberOfFullNameNamesakes: 1,
            NameUniquenessScore: 1.0,
            FirstNameUniquenessScore: 0.001,
            FirstAndLastNameUniquenessScore: 0.047619047619047616,
            BirthDate: "1998-08-11T00:00:00Z",
            Age: 23,
            ZodiacSign: "LEAO",
            ChineseSign: "Tiger",
            BirthCountry: "BRASILEIRA",
            MotherName: "Hermenegilda dos Savos Gomes " + doc,
            FatherName: "Donruam Gomes " + doc,
            MaritalStatusData: {},
            TaxIdStatus: "REGULAR",
            TaxIdOrigin: "RECEITA FEDERAL",
            TaxIdFiscalRegion: "PR-SC",
            HasObitIndication: false,
            TaxIdStatusDate: "2021-11-30T00:00:00Z",
            CreationDate: "2017-02-13T00:00:00Z",
            LastUpdateDate: "2022-01-27T00:00:00Z",
          },
        },
      ],
      QueryId: "55fa56b8-fa9a-480c-a46e-2d8c38eb0f90",
      ElapsedMilliseconds: 139.0,
      QueryDate: "2022-03-07T14:35:11.606665Z",
      Status: {
        basic_data: [
          {
            Code: 0,
            Message: "OK",
          },
        ],
      },
      Evidences: {},
    },
  };
}

export function setResponse_cpf_irregular(doc) {
  return {
    status_code: 200,
    data: {
      Result: [
        {
          MatchKeys: "doc{" + doc + "}",
          BasicData: {
            TaxIdNumber: doc,
            TaxIdCountry: "BRAZIL",
            AlternativeIdNumbers: {
              "RG - PR": "138547965",
            },
            ExtendedDocumentInformation: {
              "RG - PR": {
                DocumentNumber: "138547965",
                DocumentLast4Digits: "7965",
                DocumentIssuingAgency: "SSP",
                DocumentIssuingStateCode: "PR",
                CreationDate: "2019-10-24T22:12:18.515Z",
                LastUpdateDate: "2019-10-24T22:12:18.515Z",
                Sources: ["MEI-RF"],
              },
            },
            Name: "Enedino Amâncio Souto CPF" + doc,
            Aliases: {
              CommonName: "Enedino Amâncio Souto CPF" + doc,
              StandardizedName: "Enedino Amâncio Souto CPF" + doc,
            },
            Gender: "M",
            NameWordCount: 5,
            NumberOfFullNameNamesakes: 1,
            NameUniquenessScore: 1.0,
            FirstNameUniquenessScore: 0.001,
            FirstAndLastNameUniquenessScore: 0.047619047619047616,
            BirthDate: "1998-08-11T00:00:00Z",
            Age: 23,
            ZodiacSign: "LEAO",
            ChineseSign: "Tiger",
            BirthCountry: "BRASILEIRA",
            MotherName: "Jurema Amâncio Souto " + doc,
            FatherName: "Durval Amâncio Souto " + doc,
            MaritalStatusData: {},
            TaxIdStatus: "PENDENTE DE REGULARIZAÇÃO",
            TaxIdOrigin: "RECEITA FEDERAL",
            TaxIdFiscalRegion: "PR-SC",
            HasObitIndication: false,
            TaxIdStatusDate: "2021-11-30T00:00:00Z",
            CreationDate: "2017-02-13T00:00:00Z",
            LastUpdateDate: "2022-01-27T00:00:00Z",
          },
        },
      ],
      QueryId: "55fa56b8-fa9a-480c-a46e-2d8c38eb0f90",
      ElapsedMilliseconds: 139.0,
      QueryDate: "2022-03-07T14:35:11.606665Z",
      Status: {
        basic_data: [
          {
            Code: 0,
            Message: "OK",
          },
        ],
      },
      Evidences: {},
    },
  };
}

export function setResponse_cpf_inexistente(doc) {
  return {
    status_code: 400,
    data: {
      Result: [
        {
          MatchKeys: "doc{" + doc + "}",
          BasicData: {
            TaxIdNumber: doc,
            TaxIdStatus: "CPF DOES NOT EXIST IN RECEITA FEDERAL DATABASE",
            TaxIdStatusDate: "2022-03-09T21:33:50.5342847Z",
          },
        },
      ],
      QueryId: "5e958fa5-614d-4567-a8f2-26eea628e715",
      ElapsedMilliseconds: 173.0,
      QueryDate: "2022-03-09T21:33:50.3624556Z",
      Status: {
        basic_data: [
          {
            Code: 0,
            Message: "OK",
          },
        ],
      },
      Evidences: {},
    },
  };
}

export function setResponse_cpf_default(doc) {
  return {
    status_code: 200,
    data: {
      Result: [
        {
          MatchKeys: "doc{" + doc + "}",
          BasicData: {
            TaxIdNumber: doc,
            TaxIdCountry: "BRAZIL",
            AlternativeIdNumbers: {
              "RG - PR": "138547965",
            },
            ExtendedDocumentInformation: {
              "RG - PR": {
                DocumentNumber: "138547965",
                DocumentLast4Digits: "7965",
                DocumentIssuingAgency: "SSP",
                DocumentIssuingStateCode: "PR",
                CreationDate: "2019-10-24T22:12:18.515Z",
                LastUpdateDate: "2019-10-24T22:12:18.515Z",
                Sources: ["MEI-RF"],
              },
            },
            Name: "João Gomes CPF" + doc,
            Aliases: {
              CommonName: "João Gomes CPF" + doc,
              StandardizedName: "João Gomes CPF" + doc,
            },
            Gender: "M",
            NameWordCount: 5,
            NumberOfFullNameNamesakes: 1,
            NameUniquenessScore: 1.0,
            FirstNameUniquenessScore: 0.001,
            FirstAndLastNameUniquenessScore: 0.047619047619047616,
            BirthDate: "1998-08-11T00:00:00Z",
            Age: 23,
            ZodiacSign: "LEAO",
            ChineseSign: "Tiger",
            BirthCountry: "BRASILEIRA",
            MotherName: "JOHN DOE MOTHER do CPF" + doc,
            FatherName: "JOHN DOE FATHER do CPF" + doc,
            MaritalStatusData: {},
            TaxIdStatus: "REGULAR",
            TaxIdOrigin: "RECEITA FEDERAL",
            TaxIdFiscalRegion: "PR-SC",
            HasObitIndication: false,
            TaxIdStatusDate: "2021-11-30T00:00:00Z",
            CreationDate: "2017-02-13T00:00:00Z",
            LastUpdateDate: "2022-01-27T00:00:00Z",
          },
        },
      ],
      QueryId: "55fa56b8-fa9a-480c-a46e-2d8c38eb0f90",
      ElapsedMilliseconds: 139.0,
      QueryDate: "2022-03-07T14:35:11.606665Z",
      Status: {
        basic_data: [
          {
            Code: 0,
            Message: "OK",
          },
        ],
      },
      Evidences: {},
    },
  };
}

export const response_cpf_inexistente = {
  status_code: 400,
  data: {
    Result: [
      {
        MatchKeys: "doc{66721832054}",
        BasicData: {
          TaxIdNumber: "66721832054",
          TaxIdStatus: "CPF DOES NOT EXIST IN RECEITA FEDERAL DATABASE",
          TaxIdStatusDate: "2022-03-09T21:33:50.5342847Z",
        },
      },
    ],
    QueryId: "5e958fa5-614d-4567-a8f2-26eea628e715",
    ElapsedMilliseconds: 173.0,
    QueryDate: "2022-03-09T21:33:50.3624556Z",
    Status: {
      basic_data: [
        {
          Code: 0,
          Message: "OK",
        },
      ],
    },
    Evidences: {},
  },
};

export const error_invalid_document = {
  status_code: 403,
  data: {
    message: "The given data was invalid.",
    errors: {
      document_number: ["The document number is invalid."],
    },
  },
};
