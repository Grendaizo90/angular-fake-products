import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: 'app-create-product',
    templateUrl: './create-product.component.html',
    styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
    constructor(public modalService: ModalService) {}

    minTitleLength = 5;

    ngOnInit(): void {}

    form = new FormGroup({
        title: new FormControl<string>('', [
            Validators.required,
            Validators.minLength(this.minTitleLength),
        ]),
    });

    get title() {
        return this.form.controls.title as FormControl;
    }

    submit() {
        console.log('this.form.value :>>', this.form);
    }
}
