from django.contrib import admin
from store.models import Product
# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    list_display=('cod_prod','name','size','mark','gender','type_p')
    search_fields=('name','size','mark','gender','type_p')
 

admin.site.register(Product, ProductAdmin)