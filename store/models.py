from django.db import models

# Create your models here.
class Product(models.Model):
    GENDER_CHOICES=(
        ('M','Masculino'),
        ('F','Femenino'),
    )
    cod_prod= models.AutoField(primary_key=True)
    name=models.CharField(max_length=70,blank=False,null=False)
    description= models.TextField(blank=False,null=False)
    mark=models.CharField(max_length=70,blank=False,null=False)
    type_p=models.CharField(max_length=70,blank=False,null=False)
    gender=models.CharField(max_length=1,choices=GENDER_CHOICES,null=False,)
    size=models.CharField(max_length=30,blank=False,null=False)
    img=models.ImageField(upload_to='productos',null=True)
    def __str__(self):
        return self.name + ' \t' + self.size
