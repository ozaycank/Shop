import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree, CanActivate } from "@angular/router"; // Import CanActivate
import { AccountService } from "../services/account.service";
import { Observable } from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate { // Implement CanActivate
    constructor(private accountService: AccountService, private router: Router) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        let logged = this.accountService.isLoggedIn();
        if (logged) {
            return true;
        }
        return this.router.createUrlTree(["login"]);
    }
}
