# -*- coding: utf-8 -*-
# @Time    : 2019/7/27 17:04
# @Author  : ZPF
# @Email   : 499428970@qq.com
# @File    : urls.py
# @Software: PyCharm

from django.urls import path
from django.views.decorators.cache import cache_page
from . import views

app_name = "resume"

urlpatterns = [
    path('resume/', views.resume),

]