from django import forms

class CabRideSearch(forms.Form):

    search_pickup= forms.CharField(max_length=50,widget=forms.TextInput(attrs={'class' : 'input', 'placeholder': 'Leaving from'}))
    search_drop = forms.CharField(max_length=50,widget=forms.TextInput(attrs={'class' : 'input', 'placeholder': 'Going to'}))
