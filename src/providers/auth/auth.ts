import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Rx';
import { UserMod } from '../../models/trajet-item/trajet-item.interface';


@Injectable()
export class AuthProvider {
  constructor(public afAuth: AngularFireAuth,

  ) {}

  loginUsers(email: string, password: string): Promise<User> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  async signupUsers(email: string, password: string,userMod:UserMod): Promise<User> {
    try {
      const newUser: User = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);

      await firebase
        .database()
        .ref(`/userProfile/${newUser.uid}`)
        .set(userMod);
      return newUser;
    } catch (error) {
      throw error;
    }
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }

    /**
   * get auth state
   */
  get currentUser(): any {
    return this.getAuth();
  }

  /**
   * get auth
   */
  getAuth(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
}
