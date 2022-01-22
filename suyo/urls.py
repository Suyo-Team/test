from django.conf import settings
from django.urls import include, path
from django.conf.urls.static import static
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),

    path('', include(('users.urls', 'users'), namespace='users')),
    path('', include(('propertys.urls', 'propertys'), namespace='propertys')),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)