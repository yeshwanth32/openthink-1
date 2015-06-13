(defproject openthink "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2511"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [org.om/om "0.8.0"]
                 [sablono "0.2.22"]
                 [prismatic/dommy "0.1.3"]
                 [cljs-ajax "0.3.3"]
                 [com.cognitect/transit-cljs "0.8.188"]
                 [markdown-clj "0.9.62"]
                 [bidi "1.15.0" :exclusions [org.clojure/clojure]]
                 [kibu/pushy "0.3.1"]
                 [binaryage/devtools "0.3.0"]]

  :plugins [[lein-cljsbuild "1.0.4"]]

  :source-paths ["src"]
  :hooks [leiningen.cljsbuild]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :output-to "../server/static/app-dev.js"
                :output-dir "../server/static/out"
                :optimizations :none
                :source-map true}}
            { :id "release"
              :source-paths ["src"]
              :compiler {
                :output-to "../server/static/app.js"
                :optimizations :advanced
                :pretty-print false
                :preamble ["react/react.min.js"]}}]})
