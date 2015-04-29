from django.shortcuts import render
from articles.models import Article

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
  send_mail('ericslone.io Contact Form', send_content, 'Eric Slone <info@ericslone.io>', ['eric@thoughtblox.com'], fail_silently=True)
  context['pagetitle'] = 'Connect'
  return render(request, 'users/thanks.html', context)
