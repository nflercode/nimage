{{- define "ingress.host" }}
{{- if .Values.pr -}}
    image.pr-{{ .Values.pr }}.mychips.online
{{- else -}}
    image.mychips.online
{{- end -}}
{{- end }}