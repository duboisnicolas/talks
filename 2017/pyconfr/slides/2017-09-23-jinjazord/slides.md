name: title
layout: true
class: template-base, template-title
---
name: slide
layout: true
class: template-base, template-slide
---
template: title
class: template-title-jinja

# Formulaires et macros Jinja
## Retour d'expérience chez PeopleDoc

23/09/2017 à PyConFr 2017, Toulouse

**Nicolas Dubois • @wo0dyn**

---
template: slide
name: about

# À propos

<style>
    video, #snapshot {object-fit: cover; border-radius: 50%; height: 400px;
                      width: 400px; display: block; margin: auto; font-size: 250px; }
    #video { padding-top: 1em; text-align: center; }
    #video, aside { display: table-cell; width: 50%; }
    #snapshot { box-shadow: 0 10px 6px -6px #777; }
    aside { vertical-align: middle; font-size: xx-large; padding-left: 1em; }
    .username { color: #075684; display: block; }
    .username:before { content: "@"; }
</style>

<div id="video">
    <video autoplay></video>
    <img src="" id="snapshot" style="display: none;">
    <canvas style="display: none;"></canvas>
</div>
<aside>
    <h3>Nicolas Dubois</h3>
    <span class="username">wo0dyn</span>
    Développeur Web Full Stack<br>
    PeopleDoc<br>
    Papa & Guitariste
</aside>

---
template: slide

# Contexte
## PeopleDoc : État de l'art

* Plusieurs produits
* Projets indépendants
* Pas forcément la même stack
* Pas forcément le même framework front

---
template: slide

# Contexte
## PeopleDoc : État de l'art

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/knowledge-base-homepage.png">
</figure>

---
template: slide

# Contexte
## PeopleDoc : État de l'art

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/knowledge-base-part2.png">
</figure>

---
template: slide

# Contexte
## PeopleDoc : État de l'art

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/document-generation.png">
</figure>

---
template: slide

# Contexte
## PeopleDoc : État de l'art

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/hr-processes.png">
</figure>

---
template: slide

# Contexte
## PeopleDoc : État de l'art

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/sla-measurement-and-reporting.png">
</figure>


---
template: slide

# Contexte
## PeopleDoc UI : Harmoniser

* Avoir le même design sur tous les produits
* Minimiser les nombres de dépendances externes
* Améliorer 
  - l'expérience utilisateur (tests utilisateurs)
  - l'accessibilité
* Recommandations de _wording_

---
template: slide

# Contexte
## PeopleDoc UI : Harmoniser

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/pdui-peopledoc-homepage.png">
</figure>

---
template: slide

# Contexte
## PeopleDoc UI : Harmoniser

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/pdui-requests.png">
</figure>

---
template: slide

# Contexte
## PeopleDoc UI : Harmoniser

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/pdui-create-article.png">
</figure>

---
template: slide

# Contexte
## PeopleDoc UI : Harmoniser

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/pdui-view-article.png">
</figure>

---
template: slide

# Design
## PeopleDoc UI • Composants

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/example-form.png">
</figure>


---
template: slide

# Design
## PeopleDoc UI • Composant : icône

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/component-icon-small.png">
  <img src="/slides/2017-09-23-jinjazord/images/component-icon-normal.png">
  <img src="/slides/2017-09-23-jinjazord/images/component-icon-large.png">
</figure>

```html
<svg class="icon icon--small">
  <use xlink:href="../icons.svg#user"></use>
</svg>
<svg class="icon">
  <use xlink:href="../icons.svg#document"></use>
</svg>
<svg class="icon icon--large">
  <use xlink:href="../icons.svg#workplace"></use>
</svg>
```

---
template: slide

# Design
## PeopleDoc UI • Composant : checkboxes

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/component-checkboxes.png">
</figure>

```html
<div class="checkbox">
  <input type="checkbox" name="checkbox" id="checkbox1" class="checkbox__input" />
  <label for="checkbox1" class="checkbox__label">
    <div class="checkbox__control">
      <svg class="checkbox__icon icon">
        <use xlink:href="../icons.svg#check"></use>
      </svg>
    </div>
    <div class="checkbox__display">This is a checkbox input</div>
  </label>
</div>
```

---
template: slide

# Design
## PeopleDoc UI • Composant : select

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/component-select.png">
</figure>

```html
<div class="select select--closed">
  <div data-toggle="select" class="select__header">
    <span class="select__title">Select Temperature</span>
    <svg class="select__icon select__icon--closed icon">
      <use xlink:href="../icons.svg#caret"></use>
    </svg>
  </div>
  <div class="select__body">
    <div class="select__option-container">
      <div class="select__option radio">
        <input type="radio" name="temperature" value="hot" id="hot" class="radio__input" />
        <label for="hot" class="select__label radio__label">
          <div class="radio__control">
            <svg class="radio__icon icon">
              <use xlink:href="../icons.svg#dot"></use>
            </svg>
          </div>
          <div class="select__display radio__display">Hot</div>
        </label>
      </div>
      <div class="select__option radio">
        <input type="radio" name="temperature" value="cold" id="cold" class="radio__input" />
        <label for="cold" class="select__label radio__label">
          <div class="radio__control">
            <svg class="radio__icon icon">
              <use xlink:href="../icons.svg#dot"></use>
            </svg>
          </div>
          <div class="select__display radio__display">Cold</div>
        </label>
      </div>
    </div>
  </div>
</div>
```

---
template: slide

# Design
## PeopleDoc UI • Composants

**On voulait un moyen _simple_ de rendre ces composants en _Django_.**


---
template: slide

# Jinja
## Langage de template
### Utilisé dans plusieurs projets

- Flask
- Sphinx
- Ansible
- …
- Django 1.8+

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/jinja-logo.png">
</figure>

---
template: slide

# Jinja
## Installation


```console
$ pip install Jinja2  # Yeah, no kidding!
```

```python
>>> from jinja2 import Template
>>> template = Template('Salut {{ city }} !')
>>> template.render(city='Toulouse')
u'Salut Toulouse !'
```

---
template: slide

# Jinja
## Utilisation


```jinja
<!doctype html>
<html lang="en">
<head>
    <title>My Webpage</title>
</head>
<body>
    <ul id="navigation">
    {% for item in navigation %}
        <li><a href="{{ item.href }}">{{ item.caption }}</a></li>
    {% endfor %}
    </ul>

    <h1>My Webpage</h1>
    {{ a_variable }}

    {# a comment #}
</body>
</html>
```

---
template: slide

# Jinja
## Macros

**Définition**

```jinja
{% macro input(name, value='', type='text') %}
  <input type="{{ type }}" name="{{ name }}" value="{{ value|e }}">
{% endmacro %}
```

**Usage**

```jinja
<p>{{ input('username') }}</p>
```

**Rendu**

```html
<p>
  <input type="text" name="username" value="">
</p>
```


---
template: slide

# Jinja
## Macros

**Définition**

```jinja
{% macro button(type) %}
  <button type="{{ type }}">
    {{ caller() }}
  </button>
{% endmacro %}
```

**Usage**

```jinja
{% call button('submit') %}
  Click <em>here</em>
{% endcall %}
```

**Rendu**

```html
<button type="submit">
  Click <em>here</em>
</button>
```

---
template: slide

# Jinja
## Macros

**Définition**

```jinja
{% macro button(type, contents='') %}
  <button type="{{ type }}">
    {% if caller %}{{ caller() }}{% else %}{{ contents }}{% endif %}
  </button>
{% endmacro %}
```

**Usage**

```jinja
{{ button('submit', 'PyConFr') }}
```

**Rendu**

```html
<button type="submit">
  PyConFr
</button>
```

---
template: slide

# Jinja
## Macros

**Définition**

```jinja
{% macro button(type, contents='') %}
  <button type="{{ type }}">
    {% if caller %}{{ caller() }}{% else %}{{ contents }}{% endif %}
  </button>
{% endmacro %}
```

**Usage**

```jinja
{% call button('submit') %}
  PyConFr
{% endcall %}
```

**Rendu**

```html
<button type="submit">
  PyConFr
</button>
```


---
template: slide

# Jinja
## Macros • Imports

**Usage**

```jinja
{% from 'forms.html' import input as input_field, button %}
{{ input_field('foo') }}
```

**Rendu**

```html
<input type="text" name="foo" value="">
```

---
template: slide

# Jinja
## jinja-peopledoc-ui


```
├── components
│   ├── alert.jinja
│   ├── avatar.jinja
│   └── …
├── form-components
│   ├── checkbox.jinja
│   ├── date-picker.jinja
│   ├── file-upload.jinja
│   ├── horizontal-form.jinja
│   ├── input.jinja
│   └── …
└── style
    └── icon.jinja
```

---
template: slide

# Jinja
## jinja-peopledoc-ui • Composant : icône

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/component-icon-small.png">
  <img src="/slides/2017-09-23-jinjazord/images/component-icon-normal.png">
  <img src="/slides/2017-09-23-jinjazord/images/component-icon-large.png">
</figure>

```jinja
{{ icon('user', modifiers=['small']) }}
{{ icon('document') }}
{{ icon('workplace', modifiers=['large']) }}
```

---
template: slide

# Jinja
## jinja-peopledoc-ui • Composant : checkboxes

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/component-checkboxes.png">
</figure>

```jinja
{{ checkbox('checkbox', label='This is a checkbox input') }}
{{ checkbox('checkbox', label='This is a checked checkbox input', checked=true) }}
{{ checkbox('checkbox', label='This is a disabled checkbox input', disabled=true) }}
{{ checkbox('checkbox', label='This is an indeterminate checkbox input', indeterminate=true) }}

```

---
template: slide

# Jinja
## jinja-peopledoc-ui • Composant : select

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/component-select.png">
</figure>

```jinja
{% set options = [('hot', 'Hot'), ('cold', 'Cold')] %}
{{ select('temperature', label='Select temperature', options=options) }}
```

---
template: slide

# Jinja
## jinja-peopledoc-ui • Imports

```jinja
{# ui.jinja #}
{% import 'macros/style/icon.jinja' as icon_style %}
{% set icon = icon_style.icon %}
{% import 'macros/form-components/checkbox.jinja' as checkbox_components %}
{% set checkbox = checkbox_components.checkbox %}
{% import 'macros/form-components/select.jinja' as select_components %}
{% set select = select_components.select %}
{# … #}
```

**Usage**

```jinja
{% import 'ui.jinja' as ui %}
{{ ui.icon('user', modifiers=['small']) }}
```


---
template: slide

# Jinja/Django
## jinja-peopledoc-ui • Django Form

```django
<form action="/your-name/" method="post">
    {{ form }}
    <input type="submit" value="Submit" />
</form>
```

---
template: slide

# Jinja/Django
## jinja-peopledoc-ui • Django Form

```jinja
{% import 'ui.jinja' as ui %}
<form action="/your-name/" method="post">
    {{ ui.django.render_form(form) }}
    {{ ui.submit_button(value='submit', modifiers=['primary']) }
</form>
```

---
template: slide

# Jinja/Django
## jinja-peopledoc-ui • Django Form

```python
COUNTRIES = [('ca', 'Canada'), ('fr', 'France'),
             ('uk', 'United Kingdom'), ('us', 'United States'),]

class ExampleForm(forms.Form):
    char = forms.CharField(required=False)
    password = forms.CharField(initial='secret', widget=forms.PasswordInput())
    hidden = forms.CharField(widget=forms.HiddenInput())
    checkbox = forms.BooleanField(help_text='Help-text for my checkbox')
    select = forms.ChoiceField(choices=COUNTRIES, initial='fr')
    decimal = forms.DecimalField(initial=42.0, decimal_places=2, max_digits=4)
    date = forms.DateField(initial='2017-03-02')
    email = forms.EmailField()
    # …
```

---
template: slide

# Jinja/Django
## jinja-peopledoc-ui • Django Form

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/pdui-django-form.png">
</figure>

---
template: slide

# Jinja
## jinja-peopledoc-ui • Documentation des macros

```jinja
{% macro icon(name) %}

{# doc:description: Display icon with the given name #}
{# doc:signatures:  {{ icon(name :string, style= :string, …) }} #}

<svg{% if kwargs['style'] %} style="{{ kwargs['style'] }}"{% endif %}{# … #}>
    <use xlink:href="{{ static('peopledoc-ui/icons.svg') }}#{{ name }}">
    </use>
</svg>

{% endmacro %}
```

→ Génération d'un fichier JSON pour l'éditeur

---
template: slide

# Jinja
## jinja-peopledoc-ui • Statut

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/jinjazord-status.png">
</figure>

---
template: slide

# Jinja
## jinja-peopledoc-ui • Tests unitaires

* helpers
* macros
  - Documentation PeopleDoc UI → BeautifulSoup.prettify()
  - Exécute les macros correspondantes → BeautifulSoup.prettify()
  - assert code de référence == code de l'implémentation

---
template: slide

# Jinja
## Démo

<figure>
  <img src="/slides/2017-09-23-jinjazord/images/jerome-bonaldi.jpg">
</figure>

---
template: title
class: template-title-desk

# Fin
## Merci !
### Questions ?

<small>S'il vous plaît, non ! 😳</small>
