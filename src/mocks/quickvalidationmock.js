export function setResponse_cpf_regular(doc) {
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
            Name: "João Gomes",
            Aliases: {
              CommonName: "João Gomes",
              StandardizedName: "João Gomes",
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
            MotherName: "JOHN DOE MOTHER",
            FatherName: "JOHN DOE FATHER",
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
    data: {
      Result: [
        {
          MatchKeys: "doc{10841201943}",
          BasicData: {
            TaxIdNumber: "10841201943",
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
            Name: "JOHN DOE",
            Aliases: {
              CommonName: "JOHN DOE",
              StandardizedName: "JOHN DOE",
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
            MotherName: "JOHN DOE MOTHER",
            FatherName: "JOHN DOE FATHER",
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

export function setresponse_cpf_inexistente(doc) {
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

export const response_cpf_regular = {
  status_code: 200,
  data: {
    Result: [
      {
        MatchKeys: "doc{10841201943}",
        BasicData: {
          TaxIdNumber: "10841201943",
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
          Name: "João Gomes",
          Aliases: {
            CommonName: "João Gomes",
            StandardizedName: "João Gomes",
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
          MotherName: "JOHN DOE MOTHER",
          FatherName: "JOHN DOE FATHER",
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
