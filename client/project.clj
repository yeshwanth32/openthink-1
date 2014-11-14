(defproject openthink "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2371"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 [om "0.8.0-alpha2"]
                 [sablono "0.2.22"]
                 [prismatic/dommy "0.1.3"]
                 [cljs-ajax "0.3.3"]
                 [com.cognitect/transit-cljs "0.8.188"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src"]

  :cljsbuild {
    :builds [{:id "openthink"
              :source-paths ["src"]
              :compiler {
                :output-to "../server/static/openthink.js"
                :output-dir "../server/static/out"
                :optimizations :none
                :source-map true}}]})
