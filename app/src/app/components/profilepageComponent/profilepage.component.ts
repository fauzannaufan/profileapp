/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE SELECTOR TEMPLATE_URL AND CLASS NAME*/
import { Component, OnInit } from '@angular/core'
import { NBaseComponent } from '../../../../../app/baseClasses/nBase.component';
import {FormBuilder,Validators} from '@angular/forms'
import {profileservice} from 'app/sd-services/profileservice'
import { NeutrinosOAuthClientService } from 'neutrinos-oauth-client';

/*
Client Service import Example:
import { servicename } from 'app/sd-services/servicename';
*/

/*
Legacy Service import Example :
import { HeroService } from '../../services/hero/hero.service';
*/

@Component({
    selector: 'bh-profilepage',
    templateUrl: './profilepage.template.html'
})

export class profilepageComponent extends NBaseComponent implements OnInit {
    profileForm;
    socialForm;
    userdata;
    showform = false;
    ddData = [];
    mmData = [];
    yyData = [];
    countries = ['USA', 'Indonesia', 'India'];

    constructor(public fb:FormBuilder, public service:profileservice, public neutrinosOAuthClientService: NeutrinosOAuthClientService) {
        super();
    }

    ngOnInit() {
        console.log(this.neutrinosOAuthClientService);
        for (let i=1;i<=31;i++) {
            let number = i < 10 ? "0"+i : i+"";
            this.ddData.push(number);
        }

        for (let i=1;i<=12;i++) {
            let number = i < 10 ? "0"+i : i+"";
            this.mmData.push(number);
        }

        for (let i=1970;i<=2020;i++) {
            this.yyData.push(i);
        }

        this.getUser();
    }

    async getUser() {
        this.userdata = await this.service.getUser(1);
        console.log(this.userdata);

        this.setFormData();
    }

    setFormData() {
        let formdata = this.userdata.local.userData[0];

        console.log(formdata.birthday.substring(0,4));

        this.profileForm = this.fb.group({
            fullName: [formdata.fullname,Validators.required],
            title: [formdata.title,Validators.required],
            email: [formdata.email,[Validators.required,Validators.email]],
            dd: [formdata.birthday.substring(8,10),Validators.required],
            mm: [formdata.birthday.substring(5,7),Validators.required],
            yy: [Number(formdata.birthday.substring(0,4)),Validators.required],
            country: [formdata.country,Validators.required],
            state: [formdata.state,Validators.required],
            postalCode: [formdata.postalcode,Validators.required],
            phoneNumber: [formdata.phone,Validators.required],
            agreeNotif: [formdata.agree_notif],
        })

        this.socialForm = this.fb.group({
            facebook: [formdata.facebook,Validators.required],
            twitter: [formdata.twitter,Validators.required],
            blogger: [formdata.blogger,Validators.required],
            google: [formdata.google,Validators.required],
            linkedin: [formdata.linkedin,Validators.required],
            website: [formdata.website,Validators.required],
        })

        this.showform = true;
    }

    onSubmitProfile() {
        console.log(this.profileForm)

        if (this.profileForm.valid) this.updateprofile();
    }

    async updateprofile() {
        await this.service.updateprofile([1,
            this.profileForm.value.fullName,
            this.profileForm.value.title,
            this.profileForm.value.email,
            this.profileForm.value.yy+"-"+this.profileForm.value.mm+"-"+this.profileForm.value.dd,
            this.profileForm.value.country,
            this.profileForm.value.state,
            this.profileForm.value.postalCode,
            this.profileForm.value.phoneNumber,
            this.profileForm.value.agreeNotif
        ]);
    }

    onSubmitSocial() {
        console.log(this.socialForm)
        if (this.socialForm.valid) this.updatesocial();
    }

    async updatesocial() {
        await this.service.updatesocial([1,
            this.socialForm.value.facebook,
            this.socialForm.value.twitter,
            this.socialForm.value.blogger,
            this.socialForm.value.google,
            this.socialForm.value.linkedin,
            this.socialForm.value.website
        ])
    }

    logout() {
        this.neutrinosOAuthClientService.logout('login')
    }
}
