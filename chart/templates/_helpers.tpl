{{- define "ingress.host" }}
{{- if .Values.pr -}}
    nimage.pr-{{ .Values.pr }}.nfler.se
{{- else -}}
    nimage.nfler.se
{{- end -}}
{{- end }}