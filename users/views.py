from django.shortcuts import render, render_to_response
from django.template import RequestContext
from articles.models import Article
from django.core.mail import send_mail

def index(request):
  context = dict()
  context['pagetitle'] = 'Home'
  context['articles'] = Article.objects.all().order_by('-id')
  return render(request, 'users/index.html', context)
	
def about(request):
  context = dict()
  context['pagetitle'] = 'About'
  return render(request, 'users/about.html', context)
	
def projects(request):
  context = dict()
  context['pagetitle'] = 'Projects'
  return render(request, 'users/projects.html', context)
  
def project(request, projectslug):
  context = dict()
  context['pagetitle'] = 'Projects'
  htmltemplate = 'users/' + projectslug + '.html'
  return render(request, htmltemplate, context)
	
def journal(request):
  context = dict()
  context['pagetitle'] = 'Journal'
  context['articles'] = Article.objects.all().order_by('-id')
  return render(request, 'users/journal.html', context)
  
def article(request, postid, articleslug):
  context = dict()
  context['pagetitle'] = 'Journal'
  context['article'] = Article.objects.get(id=postid)
  return render(request, 'users/article.html', context)
	
def connect(request):
  context = dict()
  context['pagetitle'] = 'Connect'
  return render(request, 'users/connect.html', context)
  
def contact(request):
  context = dict()
  name = request.POST['name']
  email = request.POST['email']
  message = request.POST['message']
  send_content = "Name: " + name + "\n\nEmail: " + email + "\n\nMessage: " + message
  send_mail('Contact Form', send_content, 'Fleming Slone <fslone@gmail.com>', ['fslone@gmail.com'], fail_silently=False)
  context['pagetitle'] = 'Connect'
  return render(request, 'users/thanks.html', context)
  
def handler404(request):
  context = dict()
  return render(request, 'users/404.html', context)


def handler500(request):
  context = dict()
  return render(request, 'users/500.html', context)
