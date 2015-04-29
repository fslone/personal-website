from django.conf.urls import patterns, include, url

from django.contrib import admin
import users
admin.autodiscover()

urlpatterns = patterns('',
    url(r'^$', 'users.views.index', name='index'),
    url(r'^about/', 'users.views.about', name='about'),
    url(r'^projects/', 'users.views.projects', name='projects'),
    url(r'^journal/', 'users.views.journal', name='journal'),
    url(r'^connect/', 'users.views.connect', name='connect'),
    url(r'^contact/', 'users.views.contact', name='contact'),
    url(r'^post/(?P<postid>[^/]*)/(?P<articleslug>[\w-]+)/$', 'users.views.article', name='article'),
    url(r'^project/(?P<projectslug>\w+)/$', 'users.views.project', name='project'),
    url(r'^admin/', include(admin.site.urls)),
)
