from django import forms

class CabRideSearch(forms.Form):

    search_leaving_from = forms.CharField(max_length=50,widget=forms.TextInput(attrs={'class' : 'input', 'placeholder': 'Leaving from'}))
    search_going_to = forms.CharField(max_length=50,widget=forms.TextInput(attrs={'class' : 'input', 'placeholder': 'Going to'}))
