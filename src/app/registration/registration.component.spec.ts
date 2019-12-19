import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';

import { RegistrationComponent } from './registration.component';

describe( 'App Component Working', () => {

    let fixture: ComponentFixture<RegistrationComponent>;
    let objRegistrationComponent: RegistrationComponent;

    let debuger: DebugElement;
    let navElement: HTMLElement;

    beforeEach( async () => {
        TestBed.configureTestingModule({
            declarations: [
                RegistrationComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                ReactiveFormsModule
            ]
        }).compileComponents();
    });

    beforeEach( () => {
        fixture = TestBed.createComponent( RegistrationComponent );
        objRegistrationComponent = fixture.componentInstance;

        debuger = fixture.debugElement.query( By.css( 'form' ) );
        navElement = fixture.nativeElement;

        fixture.detectChanges();
    });

    it( 'Should Create Registration Component', () => {
        expect( objRegistrationComponent ).toBeTruthy();
    });

    it( 'Check Form Title', () => {
        expect( objRegistrationComponent.title ).toEqual( 'Registration Form' );
    });

    it( 'Should set submitted to true', () => {
        objRegistrationComponent.onSubmit();
        expect( objRegistrationComponent.submitted ).toBeTruthy();
    });

    it( 'Should call the onSubmitted Method', () => {
        fixture.detectChanges();
        spyOn( objRegistrationComponent, 'onSubmit' );
        navElement = fixture.debugElement.query( By.css( 'button' ) ).nativeElement;
        navElement.click();        
        expect( objRegistrationComponent.onSubmit ).toHaveBeenCalledTimes(0);
    });

    it( 'Is form valid for required field', () => {
        objRegistrationComponent.registerForm.controls['firstName'].setValue('');
        objRegistrationComponent.registerForm.controls['lastName'].setValue('');
        objRegistrationComponent.registerForm.controls['zipcode'].setValue('');
        objRegistrationComponent.registerForm.controls['phone'].setValue('');

        expect( objRegistrationComponent.registerForm.valid ).toBeFalsy();
    });

    it( 'Is form valid for minium value field', () => {
        objRegistrationComponent.registerForm.controls['firstName'].setValue('Steve');
        objRegistrationComponent.registerForm.controls['lastName'].setValue('Jobs');
        objRegistrationComponent.registerForm.controls['zipcode'].setValue('123');
        objRegistrationComponent.registerForm.controls['phone'].setValue('1123');

        expect( objRegistrationComponent.registerForm.valid ).toBeFalsy();
    });

    it( 'Is form valid for maximum value field', () => {
        objRegistrationComponent.registerForm.controls['firstName'].setValue('Steve');
        objRegistrationComponent.registerForm.controls['lastName'].setValue('Jobs');
        objRegistrationComponent.registerForm.controls['zipcode'].setValue('123456');
        objRegistrationComponent.registerForm.controls['phone'].setValue('112345678901');

        expect( objRegistrationComponent.registerForm.valid ).toBeFalsy();
    });

    it( 'Is form valid for positive scenario', () => {
        objRegistrationComponent.registerForm.controls['firstName'].setValue('Steve');
        objRegistrationComponent.registerForm.controls['lastName'].setValue('Jobs');
        objRegistrationComponent.registerForm.controls['zipcode'].setValue('12345');
        objRegistrationComponent.registerForm.controls['phone'].setValue('1234567890');

        expect( objRegistrationComponent.registerForm.valid ).toBeTruthy();
    });

});