from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.http import HttpResponse
from django.contrib.auth.decorators import login_required

from rest_framework import viewsets
from rest_framework import permissions

from suyoapi.forms import LoginForm, UsuarioForm, PropietarioForm, PredioForm
from suyoapi.models import Propietario, Predio
from suyoapi.serializers import PropietarioSerializer, PredioSerializer


def login_(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            usuario = form.cleaned_data['usuario']
            password = form.cleaned_data['password']
            user = authenticate(username=usuario, password=password)
            if user is not None:
                login(request, user)
                return redirect(reverse('home'))
            else:
                return HttpResponse('Usuario y/o Password incorrectos')
        else:
            return HttpResponse('Revise los datos ingresados')
    else:
        context = dict()
        context['login_form'] = LoginForm()
        return render(request, 'login_usuario.html', context)


@login_required(login_url='/login/')
def logout_(request):
    logout(request)
    return redirect(reverse('login'))


def register_user(request):
    if request.method == 'POST':
        form = UsuarioForm(request.POST)
        if form.is_valid():
            user = User.objects.create_user(
                username=form.cleaned_data['username'],
                password=form.cleaned_data['password'],
                email=form.cleaned_data['email'],
                first_name=form.cleaned_data['first_name'],
                last_name=form.cleaned_data['last_name']
            )
            user.save()
            return redirect(reverse('login'))
        else:
            errors = form.errors
            return HttpResponse(f'Verifique los datos ingresados {errors}')
    else:
        context = dict()
        context['form_usuario'] = UsuarioForm()
        return render(request, 'register.html', context)


@login_required(login_url='/login/')
def home(request):
    context = dict()
    context['predios'] = Predio.objects.all()
    if len(context['predios']) == 0:
        context['estado'] = False
    else:
        context['estado'] = True
    return render(request, 'home.html', context)


@login_required(login_url='/login/')
def lista_propietario(request):
    context = dict()
    context['propietarios'] = Propietario.objects.all()
    return render(request, 'list_propietario.html', context)


@login_required(login_url='/login/')
def agregar_propietario(request):
    if request.method == 'POST':
        form = PropietarioForm(request.POST)
        if form.is_valid():
            nombres = form.cleaned_data['nombres']
            apellidos = form.cleaned_data['apellidos']
            Propietario.objects.create(nombres=nombres, apellidos=apellidos)
            return redirect(reverse('propietarios'))
        else:
            return HttpResponse('Verifique los datos')
    else:
        context = dict()
        context['form_propietario'] = PropietarioForm()
        return render(request, 'agregar_propietario.html', context)


@login_required(login_url='/login/')
def editar_propietario(request, id):
    propietario = Propietario.objects.get(id=id)
    if request.method == 'POST':
        form = PropietarioForm(request.POST, instance=propietario)
        if form.is_valid():
            form.save()
            return redirect(reverse('propietarios'))
        else:
            return HttpResponse('Verifique los datos ingresados')
    else:
        context = dict()
        context['form_propietario'] = PropietarioForm(instance=propietario)
        return render(request, 'editar_propietario.html', context)


@login_required(login_url='/login/')
def eliminar_propietario(request, id):
    propietario = Propietario.objects.get(id=id)
    propietario.delete()
    return redirect(reverse('propietarios'))


@login_required(login_url='/login/')
def list_predios(request):
    context = dict()
    context['predios'] = Predio.objects.all().order_by('nombre')
    return render(request, 'list_predios.html', context)


@login_required(login_url='/login/')
def detail_predio(request, id):
    context = dict()
    context['predio'] = Predio.objects.get(id=id)
    return render(request, 'predio.html', context)


@login_required(login_url='/login/')
def agregar_predio(request):
    if request.method == 'POST':
        form = PredioForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('lista-predios'))
        else:
            print(form.errors)
            return HttpResponse('Verifique los datos ingresados')
    else:
        context = dict()
        context['form_predio'] = PredioForm()
        return render(request, 'agregar_predio.html', context)


@login_required(login_url='/login/')
def editar_predio(request, id):
    predio = Predio.objects.get(id=id)
    if request.method == 'POST':
        form = PredioForm(request.POST, instance=predio)
        if form.is_valid():
            form.save()
            return redirect(reverse('lista-predios'))
        else:
            return HttpResponse('Verifique la información ingresada')
    else:
        context = dict()
        context['form_predio'] = PredioForm(instance=predio)
        return render(request, 'editar_predio.html', context)


@login_required(login_url='/login/')
def eliminar_predio(request, id):
    predio = Predio.objects.get(id=id)
    predio.delete()
    return redirect(reverse('lista-predios'))


class PropietarioView(viewsets.ModelViewSet):
    queryset = Propietario.objects.all()
    serializer_class = PropietarioSerializer
    permission_classes = [permissions.IsAuthenticated]


class PredioView(viewsets.ModelViewSet):
    queryset = Predio.objects.all()
    serializer_class = PredioSerializer
    permission_classes = [permissions.IsAuthenticated]
