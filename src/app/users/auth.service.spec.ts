import { AuthService } from "./auth.service";
import { IUser } from "./user";

describe("Service: AuthService", () => {
  const testUser: IUser = {
    id: 0,
    userName: "admin",
    isAdmin: true
  };

  // System Under Test or
  // Subject Under Test (SUT)
  let sut: AuthService;

  beforeEach(() => {
    sut = new AuthService();
  });

  it("should be created", () => {
    expect(sut).not.toBeNull();
  });

  describe("Method: IsLoggedIn()", () => {
    describe("On creation", () => {
      it("The user is not logged in", () => {
        expect(sut.isLoggedIn()).toBeFalsy("Was false...");
      });
    });
    describe("After a user has logged in", () => {
      it("The user is logged in", () => {
        sut.currentUser = testUser;
        expect(sut.isLoggedIn()).toBeTruthy();
      });
    });
  });

  describe("Method: Login()", () => {
    describe("When a user logs in", () => {
      it("The user is not marked as an admin", () => {
        sut.login("testUser", "qwerty");
        expect(sut.currentUser.isAdmin).toBeFalsy();
      });
    });
    describe("When an admin logs in", () => {
      it("The user is marked as an admin", () => {
        sut.login("admin", "qwerty");
        expect(sut.currentUser.isAdmin).toBeTruthy();
      });
    });
  });

  describe("Method: Logout()", () => {
    describe("When a user logs out", () => {
      it("The CurrentUser is reset", () => {
        sut.currentUser = testUser;
        sut.logout();
        expect(sut.currentUser).toBeNull();
      });
    });
  });
});