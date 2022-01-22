from django.urls import path, include

from rest_framework.routers import DefaultRouter

from suyoapi.views import *

router = DefaultRouter()
router.register('propietarios', PropietarioView, basename='owners')
router.register('predios', PredioView, basename='properties')

urlpatterns = [
    path('login/', login_, name='login'),
    path('logout/', logout_, name='logout'),
    path('register/', register_user, name='register'),
    path('', home, name='home'),
    path('propietarios/', lista_propietario, name='propietarios'),
    path('propietario/agregar/', agregar_propietario, name='agregar-propietario'),
    path('propietario/editar/<int:id>', editar_propietario, name='editar-propietario'),
    path('propietario/eliminar/<int:id>', eliminar_propietario, name='eliminar-propietario'),
    path('predios', list_predios, name='lista-predios'),
    path('predios/agregar/', agregar_predio, name='agregar-predio'),
    path('predio/editar/<int:id>', editar_predio, name='editar-predio'),
    path('predio/eliminar/<int:id>', eliminar_predio, name='eliminar_predio'),
    path('predio/datelles/<int:id>', detail_predio, name='detalle-predio'),
    path('api/', include(router.urls))
]
