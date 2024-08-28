begin transaction;
insert into keywords
select (select max(k.id) from keywords k) + row_number() over (order by kt.id) id,
       kt.short_name,
       kt.keyword,
       kt.favicon_url,
       kt.url,
       -- Do not auto-delete engines on browser update
       0 as safe_for_autoreplace,
       kt.originating_url,
       kt.date_created,
       kt.usage_count,
       kt.input_encodings,
       kt.suggest_url,
       kt.prepopulate_id,
       kt.created_by_policy,
       kt.last_modified,
       -- Ensure sync_guid is unique
       printf('%s-%s-%s-%s-%s', lower(hex(randomblob(4))), lower(hex(randomblob(2))), lower(hex(randomblob(2))),
              lower(hex(randomblob(2))), lower(hex(randomblob(6)))) as sync_guid,
       kt.alternate_urls,
       kt.image_url,
       kt.search_url_post_params,
       kt.suggest_url_post_params,
       kt.image_url_post_params,
       kt.new_tab_url,
       kt.last_visited,
       kt.created_from_play_api,
       kt.is_active,
       -- Ensure position is unique; increment over highest existing position
       -- It's unclear if the order of this value actually matters. The runtime position in Vivaldi appears to rely on the ID only.
       -- Alternative: substr(hex(randomblob(30)), 1, 60)
       printf('%s%d', (select max(k.position) from keywords k), row_number() over (order by kt.id)) as position,
       kt.starter_pack_id,
       kt.enforced_by_policy
from keywords_temp kt;
drop table keywords_temp;
commit transaction;
