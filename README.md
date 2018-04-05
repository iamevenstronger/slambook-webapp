# SlambookWebapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

#### Production servers

*   [Apache](https://httpd.apache.org/): add a [rewrite rule](http://httpd.apache.org/docs/current/mod/mod_rewrite.html) to the `.htaccess` file as shown ([https://ngmilk.rocks/2015/03/09/angularjs-html5-mode-or-pretty-urls-on-apache-using-htaccess/](https://ngmilk.rocks/2015/03/09/angularjs-html5-mode-or-pretty-urls-on-apache-using-htaccess/)):

    <pre><button aria-label="" title="Copy code snippet">content_copy</button>`RewriteEngine On
        # If an existing asset or directory is requested go to it as it is
        RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -f [OR]
        RewriteCond %{DOCUMENT_ROOT}%{REQUEST_URI} -d
        RewriteRule ^ - [L]` </pre>

    `# If the requested resource doesn't exist, use index.html RewriteRule ^ /index.html`

*   [NGinx](http://nginx.org/): use `try_files`, as described in [Front Controller Pattern Web Apps](https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/#front-controller-pattern-web-apps), modified to serve `index.html`:

    <pre><button aria-label="" title="Copy code snippet">content_copy</button>`try_files $uri $uri/ /index.html;`</pre>

*   [IIS](https://www.iis.net/): add a rewrite rule to `web.config`, similar to the one shown [here](http://stackoverflow.com/a/26152011/2116927):

    ```
    <system.webServer>
      <rewrite>
        <rules>
          <rule name="Angular [Routes](https://angular.io/api/router/Routes)" stopProcessing="true">
            <match url=".*" />
            <conditions logicalGrouping="MatchAll">
              <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
              <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
            </conditions>
            <action type="Rewrite" url="/index.html" />
          </rule>
        </rules>
      </rewrite>
    </system.webServer>
    ```

*   [GitHub Pages](https://pages.github.com/): you can't [directly configure](https://github.com/isaacs/github/issues/408) the GitHub Pages server, but you can add a 404 page. Copy `index.html` into `404.html`. It will still be served as the 404 response, but the browser will process that page and load the app properly. It's also a good idea to [serve from `docs/` on master](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch)and to [create a `.nojekyll` file](https://www.bennadel.com/blog/3181-including-node-modules-and-vendors-folders-in-your-github-pages-site.htm)

*   [Firebase hosting](https://firebase.google.com/docs/hosting/): add a [rewrite rule](https://firebase.google.com/docs/hosting/url-redirects-rewrites#section-rewrites).

    <pre><button aria-label="" title="Copy code snippet">content_copy</button>`"rewrites": [ {
      "source": "**",
      "destination": "/index.html"
    } ]`</pre>
