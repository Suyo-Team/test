from django import forms
from django.contrib.auth.models import User

from suyoapi.models import Propietario, Predio


class LoginForm(forms.Form):
    usuario = forms.CharField(
        max_length=20,
        label='Usuario',
        widget=forms.TextInput(
            attrs={
                'class': 'form-control',
                'placeholder': 'Usuario'
            }
        )
    )
    password = forms.CharField(
        max_length=20,
        label='Password',
        widget=forms.PasswordInput(
            attrs={
                'class': 'form-control',
                'placeholder': 'Usuario'
            }
        )
    )


class UsuarioForm(forms.ModelForm):
    username = forms.CharField(
        label='Usuario',
        max_length=20,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    password = forms.CharField(
        max_length=20,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    email = forms.EmailField(
        label='Email',
        widget=forms.EmailInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    first_name = forms.CharField(
        label='Nombres',
        max_length=50,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    last_name = forms.CharField(
        label='Apellidos',
        max_length=100,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )

    class Meta:
        model = User
        fields = ['username', 'password', 'email', 'first_name', 'last_name']


class PropietarioForm(forms.ModelForm):
    nombres = forms.CharField(
        max_length=50,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    apellidos = forms.CharField(
        max_length=100,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )

    class Meta:
        model = Propietario
        fields = '__all__'


class PredioForm(forms.ModelForm):
    propietario = forms.ModelChoiceField(
        queryset=Propietario.objects.all().order_by('nombres'),
        widget=forms.Select(
            attrs={
                'class': 'form-select'
            }
        )
    )
    nombre = forms.CharField(
        max_length=40,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    direccion = forms.CharField(
        max_length=80,
        widget=forms.TextInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    latidud = forms.DecimalField(
        widget=forms.NumberInput(
            attrs={
                'class': 'form-control'
            }
        )
    )
    longitud = forms.DecimalField(
        widget=forms.NumberInput(
            attrs={
                'class': 'form-control'
            }
        )
    )

    class Meta:
        model = Predio
        fields = '__all__'
