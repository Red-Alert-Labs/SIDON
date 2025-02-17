from django.urls import path, include
from . import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register('requirements', views.RequirementsGroupView)
router.register('commoncriteria', views.CommonCriteriaView)
router.register('scans', views.ScansView)
router.register('results', views.ResultList)

urlpatterns = [
    path('', include(router.urls)),
    path('user/', views.CurrentUserView.as_view()),
    path('scan/', views.ScanView.as_view()),
    path('result/<int:pk>/', views.ResultDetail.as_view()),
    path('result/', views.ResultDetail.as_view()),
]
