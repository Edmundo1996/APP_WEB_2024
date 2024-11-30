from django.shortcuts import render

from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required(login_url='inicio')
def list_art(request):
    return render(request,'articulos/listado_art.html',{
        'title':'Articulos',
        'content':'Listado de articulos'})
@login_required(login_url='inicio')
def list_cat(request):
    return render(request,'categorias/listado_cat.html',{
        'title':'Categorias',
        'content':'Listado de Categorias'})