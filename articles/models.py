from django.db import models


class Article(models.Model):
  article_title = models.CharField(max_length=999)
  article_slug = models.CharField(max_length=999, unique=True)
  article_description = models.TextField(blank=True)
  article_text = models.TextField()
  article_image = models.ImageField(upload_to='article-images/', blank=True)
  article_upload_date = models.DateField(blank=True)
  def __unicode__(self):
    return self.article_title