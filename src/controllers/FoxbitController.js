import sub_member_default from "../mocks/foxbit/submember";

function responseSub_member() {
    return await sub_member_default
};

class FoxbitController {
    async sub_member(request, response) {
        try {
            await response
              .status(responseSub_member().status_code)
              .send(responseSub_member().data);
          } catch (error) {
            await response.status(500).send({ message: "error" });
          }
        }
}

export default FoxbitController;