export class AuthServices {

    constructor(userServices) {
        this.userIdSelected = null;
        this.userServices = userServices;
    } 

    async init() {
        const auth = await this.userServices.getMyProfil();
        this.userIdSelected =  auth.data.user.id;
    }
}