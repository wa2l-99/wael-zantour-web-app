import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  FormData!: FormGroup;

  constructor(private builder: FormBuilder, private toastr: ToastrService) {}

  ngOnInit() {
    this.FormData = this.builder.group({
      Prénom: ['', Validators.required],
      Nom: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Téléphone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      Objet: ['', Validators.required],
      Message: ['', Validators.required],
    });
  }

  async onSubmit() {
    if (this.FormData.valid) {
      let templateParams = {
        to_name: 'Zantour Wael',
        from_name:
          this.FormData.get('Prénom')?.value +
          ' ' +
          this.FormData.get('Nom')?.value,
        from_email: this.FormData.get('Email')?.value,
        from_phone: this.FormData.get('Téléphone')?.value,
        subject: this.FormData.get('Objet')?.value,
        message: this.FormData.get('Message')?.value,
      };

      try {
        const response = await emailjs.send(
          'service_fjoqkeb',
          'template_gb2bqah',
          templateParams,
          'tDOlB6dbx6HTGFl4T'
        );
        console.log('SUCCESS!', response.status, response.text);
        this.toastr.success('Message envoyé avec succès !', 'Succès');
        this.FormData.reset();
      } catch (error) {
        console.log('FAILED...', error);
        this.toastr.error("Erreur lors de l'envoi du message", 'Erreur');
      }
    } else {
      this.toastr.warning(
        'Veuillez remplir tous les champs correctement',
        'Formulaire invalide'
      );
    }
  }
}
