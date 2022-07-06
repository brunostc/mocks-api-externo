import sub_member from "../mocks/foxbit/submember"

let submembers = []
let submember = {}

function adicionaSubMember(member) {
  submembers.push(member)
}

function responseSub_member(request) {
  let resp = {}
  submember = request?.body?.id_document
  resp = sub_member(submember)
  adicionaSubMember(resp.data)
  return resp
};

class FoxbitController {
    async sub_member(request, response) {
        try {
            await response
//                .status(200).send();
//              .status(responseSub_member().status_code).send({ message: "OK!" })
              .status(201)
              .send(responseSub_member(request).data);
          } catch (error) {
            await response.status(500).send({ message: "error" });
          }
        }

      async sub_members(request, response) {
        let data = {"data": submembers}
        try {
            await response
                .status(200)
                .send(data);
            } catch (error) {
              await response.status(500).send({ message: "error" });
            }
          }
}

export default FoxbitController;