import sub_member from "../mocks/foxbit/submember"

function responseSub_member() {
    return sub_member()
};

class FoxbitController {
    async sub_member(request, response) {
        try {
            await response
//                .status(200).send();
//              .status(responseSub_member().status_code).send({ message: "OK!" })
              .status(responseSub_member().status_code)
              .send(responseSub_member().data);
          } catch (error) {
            await response.status(500).send({ message: "error" });
          }
        }
}

export default FoxbitController;