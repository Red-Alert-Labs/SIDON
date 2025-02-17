from rest_framework import serializers
from django.contrib.auth.models import User
from .models import RequirementsGroup, CommonCriteria, Scan, Result


class CommonCriteriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommonCriteria
        fields = ('id', 'name', 'cwe_id')

class RequirementsGroupSerializer(serializers.ModelSerializer):
    requirements = CommonCriteriaSerializer(read_only=True, many=True)
    class Meta:
        model = RequirementsGroup
        fields = ('id', 'name', 'requirements')

class ResultsSerializer(serializers.ModelSerializer):
    commonCriteria = CommonCriteriaSerializer(read_only=True);
    class Meta:
        model = Result
        fields = ('scan', 'commonCriteria', 'score')

class ResultListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Result
        fields = ('scan', 'commonCriteria', 'score')

class ScansSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scan
        fields = ('id', 'name', 'uploaded_at')

class UserSerializer(serializers.ModelSerializer):
    """docstring for UserSerializer."""
    class Meta:
        model = User
        fields = ('username',)


class ScanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scan
        fields = ('id', 'name', 'uploaded_at', 'file')
