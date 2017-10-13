package com.pevans.dataloaders.remote;

import com.pevans.dtos.TermCondition;
import com.pevans.util.ServerIps;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.util.EntityUtils;
import org.apache.tools.ant.types.selectors.ContainsSelector;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class TermsAndConditionsDataLoader {
    private static final String URL;

    static {
        URL = ServerIps.getOfferUrl() + "/termsandconditions";
    }

    public List<TermCondition> execute() {
        ArrayList<TermCondition> result = new ArrayList();
        try {
            HttpResponse response = new DefaultHttpClient().execute(new HttpGet(URL));
            if (response.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
                JSONArray object = new JSONArray(EntityUtils.toString(response.getEntity()));
                for (int i = 0; i < object.length(); i++) {
                    JSONObject c = (JSONObject) object.get(i);
                    TermCondition tc = new TermCondition();
                    tc.setSection(Integer.valueOf(c.getInt("section")));
                    tc.setText(c.getString(ContainsSelector.CONTAINS_KEY));
                    tc.setTitle(c.getString("title"));
                    result.add(tc);
                }
            }
        } catch (ClientProtocolException e) {
        } catch (IOException e2) {
        } catch (JSONException e3) {
            e3.printStackTrace();
        }
        return result;
    }
}
