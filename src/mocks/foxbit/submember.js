export function putsubmember() {
    return {
        status_code: 201,
    data: {
            sn: "FRR3DTLHGJ7DPB",
            external_id: "55dde3b8-c4e8-4606-bad8-b6e0cf609e53",
            level: 10,
            created_at: "2021-02-15T22:06:32.999Z",
            id_document: {
              tax_id_number: "05727471605",
              state: "unverified",
              name: "Satoshi Nakamoto",
              birth_date: "1985-10-19",
              phone_number: "5511981818655",
              is_pep: false,
              is_us_person: false,
              us_person_number: null,
              address: {
                country: "BR",
                zip_code: "01411010",
                state: "São Paulo",
                city: "Mairiporã",
                neighborhood: "Centro",
                street: "Rua Praça da Sé",
                number: "42",
                complement: "AP 432"
              }
            }
          }
    }
}

export const sub_member_default = {
  status_code: 201,
  data: {
          sn: "FRR3DTLHGJ7DPB",
          external_id: "55dde3b8-c4e8-4606-bad8-b6e0cf609e53",
          level: 10,
          created_at: "2021-02-15T22:06:32.999Z",
          id_document: {
            tax_id_number: "05727471605",
            state: "unverified",
            name: "Satoshi Nakamoto",
            birth_date: "1985-10-19",
            phone_number: "5511981818655",
            is_pep: false,
            is_us_person: false,
            us_person_number: null,
            address: {
              country: "BR",
              zip_code: "01411010",
              state: "São Paulo",
              city: "Mairiporã",
              neighborhood: "Centro",
              street: "Rua Praça da Sé",
              number: "42",
              complement: "AP 432"
            }
          }
        }
}