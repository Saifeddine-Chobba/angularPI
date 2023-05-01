import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://localhost:8089/pidev2/';
  // userid = localStorage.getItem("UserID")
  constructor(private http: HttpClient) {}

  getAllComplaints(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + 'complaint/retriveAllComplaint');
  }
  // getMyComplaints (userid) : Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl+'complaint/'+userid);
  // }
  addComplaint(complaint: any): Observable<any> {
    return this.http.post<any>(
      this.apiUrl + 'complaint/addComplaint',
      complaint
    );
  }

  getClaimedServices(service: any): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + 'complaint/MostClaimedService/' + service
    );
  }
  getSentimentalComplaint(): Observable<any> {
    return this.http.get<any>(
      this.apiUrl + 'complaint/getSectorsWithSentiments'
    );
  }

  getAllActivities(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Activity/retriveAllActivity');
  }

  getActivityById(id?: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'Activity/'+id);
  }

 addActivity (activity : any) : Observable <any> {
  return this.http.post<any> (this.apiUrl + 'Activity/addActivity' , activity)
 }
 deleteActivity (activityID : any) : Observable <any> {
  return this.http.delete<any> (this.apiUrl +'Activity/deleteActivity/' + activityID)
 }

 sendEmail(mail : any) : Observable <any> {
  return this.http.post<any>(this.apiUrl + 'mail/sendMail' ,mail)

 }

 updateActiviy( activityID : any ,activity : any) : Observable <any> {
  return this.http.post<any> (this.apiUrl + 'Activity/updateActivity/' + activityID , activity)
 }

}
