import authRepository from "./repositories/auth";
import settingRepository from "./repositories/setting";
import vehicleRepository from "./repositories/vehicle";
const RepositoryInterface = {
    get() {},
    get(payload) {},
    getPaginated(payload) {},
    getUser() {},
    updateUser(payload) {},
    find(id) {},
    update(id, payload) {},
    create(payload) {},
    delete(id) {},
    invite(email) {},
    getAddress(id) {},
    login(payload) {},
    register(payload) {},
    logout() {},
    view(id) {},
    findAttendee(code) {},
    updateProfile(payload) {},
    confirm(payload) {},
    updatePassword(payload) {},
    forgetPassword(payload) {},
    verifyForgetPasswordOtp(payload) {},
    resetPassword(payload) {},
    createAddress(payload) {},
    verifyAccount(payload) {},

    getSettings() {},
    getItemSettings() {},
};

function bind(repositoryName, Interface) {
    return {
        ...Object.keys(Interface).reduce((prev, method) => {
            const resolveableMethod = async (...args) => {
                const repository = await import(
                    `./repositories/${repositoryName}`
                );
                return repository.default[method](...args);
            };
            return { ...prev, [method]: resolveableMethod };
        }, {}),
    };
}

// This is the place where you set up all
// of your dependencies. You can switch
// repositories or change the implementation
// details of a repository without having to
// touch all of the components which use it.
export default {
    authRepository: bind("auth", RepositoryInterface),
    settingRepository: bind("setting", RepositoryInterface),
    vehicleRepository: bind("vehicle", RepositoryInterface),
};
