from django.shortcuts import render


# Create your views here.

def resume(request):
    print('scheme', request.scheme)
    return render(request, 'resume/resume.html')
