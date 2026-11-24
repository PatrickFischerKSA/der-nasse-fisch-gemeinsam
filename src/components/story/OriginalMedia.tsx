import {useEffect,useState,type ReactNode} from 'react';
import {toast} from 'sonner';
import {uploadMedia} from '@/lib/online';
import {useStoryContent} from '@/components/shared-editor';
export function OriginalMedia({id,title,kind,children}:{id:string;title:string;kind:'img'|'video'|'audio'|'document';children?:ReactNode}){
 const ctx=useStoryContent(),[busy,setBusy]=useState(false),key='original_'+id;
 const url=ctx.media[key]||'',caption=ctx.texts['caption:'+key]||'',alt=ctx.texts['alt:'+key]||title,aspect=ctx.texts['aspect:'+key]||'auto',fit=ctx.texts['fit:'+key]||'contain';
 const pdf=(ctx.texts['type:'+key]||'')==='application/pdf';
 const {registerMedia}=ctx;useEffect(()=>{if(kind!=='document')registerMedia({id:key,kind,src:'',alt:title});},[key,kind,title,registerMedia]);
 const upload=async(file?:File)=>{if(!file)return;setBusy(true);try{const next=await uploadMedia(file);ctx.updateText('type:'+key,file.type);ctx.updateMedia(key,next);toast('Datei hochgeladen – wird online gespeichert');}catch(e){toast.error((e as Error).message);}finally{setBusy(false);}};
 const accepted=kind==='img'?'image/jpeg,image/png,image/webp,image/gif,image/avif':kind==='video'?'video/mp4,video/webm,video/quicktime,video/ogg':kind==='audio'?'audio/mpeg,audio/wav,audio/x-wav,audio/ogg,audio/mp4,audio/webm,audio/flac':'application/pdf,image/jpeg,image/png,image/webp,image/gif,image/avif';
 return <div className={'story-upload'+(!url?' story-upload-empty':'')} data-loaded={!!url}>
 {url?<figure>{kind==='audio'?<audio controls preload="metadata" src={url} aria-label={title}/>:kind==='video'?<video controls playsInline preload="metadata" src={url} aria-label={title}/>:pdf?<a href={url} target="_blank" rel="noreferrer">PDF öffnen: {title} ↗</a>:<img alt={alt} src={url} style={{objectFit:fit as 'contain'|'cover',...(aspect!=='auto'?{aspectRatio:aspect.replace(':',' / ')}:{})}}/>}
 {ctx.canEdit?<figcaption className="caption-editor"><label>Caption / Bildunterschrift<textarea aria-label={'Caption: '+id} rows={3} maxLength={5000} value={caption} placeholder="Beschreibung und Quelle …" onChange={e=>ctx.updateText('caption:'+key,e.target.value)}/></label><small>Wird automatisch online gespeichert und für alle angezeigt.</small></figcaption>:caption?<figcaption>{caption}</figcaption>:null}</figure>:children}
 {ctx.canEdit&&<div className="upload-controls"><strong>{id} · {title}</strong><label>{busy?'Datei wird hochgeladen …':url?'Datei ersetzen':'Datei hochladen'}<input aria-label={'Datei hochladen: '+id} type="file" accept={accepted} disabled={busy} onChange={e=>{void upload(e.target.files?.[0]);e.target.value='';}}/></label>
 {kind!=='audio'&&kind!=='video'&&<><label>Alternativtext<input maxLength={1000} aria-label={'Alternativtext: '+id} value={alt} onChange={e=>ctx.updateText('alt:'+key,e.target.value)}/></label><div className="upload-options"><label>Bildformat<select value={aspect} onChange={e=>ctx.updateText('aspect:'+key,e.target.value)}><option value="auto">Originalformat</option><option value="16:9">Breitbild 16:9</option><option value="4:3">4:3</option><option value="1:1">Quadratisch 1:1</option></select></label><label>Bild einpassen<select value={fit} onChange={e=>ctx.updateText('fit:'+key,e.target.value)}><option value="contain">Ganzes Bild zeigen</option><option value="cover">Rahmen füllen</option></select></label></div></>}
 {url&&<button type="button" onClick={()=>ctx.updateMedia(key,'')}>Platzhalter wiederherstellen</button>}</div>}
 </div>;
}
