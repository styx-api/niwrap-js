// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const APQC_MAKE_TCSH_PY_METADATA: Metadata = {
    id: "7c727cf4831b8e83a2479b91545d58e11b202d3a.boutiques",
    name: "apqc_make_tcsh.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface ApqcMakeTcshPyParameters {
    "__STYXTYPE__": "apqc_make_tcsh.py";
    "uvar_json": InputPathType;
    "subj_dir": string;
    "review_style"?: string | null | undefined;
    "mot_grayplot_off": boolean;
    "vstat_list"?: Array<string> | null | undefined;
}


function dynCargs(
    t: string,
): Function | undefined {
    /**
     * Get build cargs function by command type.
    
     * @param t Command type
    
     * @returns Build cargs function.
     */
    const cargsFuncs = {
        "apqc_make_tcsh.py": apqc_make_tcsh_py_cargs,
    };
    return cargsFuncs[t];
}


function dynOutputs(
    t: string,
): Function | undefined {
    /**
     * Get build outputs function by command type.
    
     * @param t Command type
    
     * @returns Build outputs function.
     */
    const outputsFuncs = {
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `apqc_make_tcsh_py(...)`.
 *
 * @interface
 */
interface ApqcMakeTcshPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function apqc_make_tcsh_py_params(
    uvar_json: InputPathType,
    subj_dir: string,
    review_style: string | null = null,
    mot_grayplot_off: boolean = false,
    vstat_list: Array<string> | null = null,
): ApqcMakeTcshPyParameters {
    /**
     * Build parameters.
    
     * @param uvar_json Text file of user variables created by gen_ss_review.py that catalogs important files in the results directory for the APQC.
     * @param subj_dir Location of AP results directory (often '.', as this program is often run from within the AP results directory).
     * @param review_style The 'style' of the APQC HTML output HTML. Allowed keywords are: {none, basic, pythonic}. Using 'pythonic' is recommended.
     * @param mot_grayplot_off Turn off the grayplot generation. This option was created for a specific case with a large dataset. Not recommended to use generally.
     * @param vstat_list Provide a list of label items to specify which volume's images should appear in the vstat QC block. Each item should correspond to subbrick label basename in the stats_dset. 'Full_Fstat' is always included. If not used, default logic picks up to 5 items to show.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "apqc_make_tcsh.py" as const,
        "uvar_json": uvar_json,
        "subj_dir": subj_dir,
        "mot_grayplot_off": mot_grayplot_off,
    };
    if (review_style !== null) {
        params["review_style"] = review_style;
    }
    if (vstat_list !== null) {
        params["vstat_list"] = vstat_list;
    }
    return params;
}


function apqc_make_tcsh_py_cargs(
    params: ApqcMakeTcshPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("apqc_make_tcsh.py");
    cargs.push(
        "-uvar_json",
        execution.inputFile((params["uvar_json"] ?? null))
    );
    cargs.push(
        "-subj_dir",
        (params["subj_dir"] ?? null)
    );
    if ((params["review_style"] ?? null) !== null) {
        cargs.push(
            "-review_style",
            (params["review_style"] ?? null)
        );
    }
    if ((params["mot_grayplot_off"] ?? null)) {
        cargs.push("-mot_grayplot_off");
    }
    if ((params["vstat_list"] ?? null) !== null) {
        cargs.push(
            "-vstat_list",
            ...(params["vstat_list"] ?? null)
        );
    }
    return cargs;
}


function apqc_make_tcsh_py_outputs(
    params: ApqcMakeTcshPyParameters,
    execution: Execution,
): ApqcMakeTcshPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: ApqcMakeTcshPyOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function apqc_make_tcsh_py_execute(
    params: ApqcMakeTcshPyParameters,
    execution: Execution,
): ApqcMakeTcshPyOutputs {
    /**
     * This program creates the single subject (ss) HTML review script '@ss_review_html' which generates images and text for the afni_proc.py quality control (APQC) HTML.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `ApqcMakeTcshPyOutputs`).
     */
    params = execution.params(params)
    const cargs = apqc_make_tcsh_py_cargs(params, execution)
    const ret = apqc_make_tcsh_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function apqc_make_tcsh_py(
    uvar_json: InputPathType,
    subj_dir: string,
    review_style: string | null = null,
    mot_grayplot_off: boolean = false,
    vstat_list: Array<string> | null = null,
    runner: Runner | null = null,
): ApqcMakeTcshPyOutputs {
    /**
     * This program creates the single subject (ss) HTML review script '@ss_review_html' which generates images and text for the afni_proc.py quality control (APQC) HTML.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param uvar_json Text file of user variables created by gen_ss_review.py that catalogs important files in the results directory for the APQC.
     * @param subj_dir Location of AP results directory (often '.', as this program is often run from within the AP results directory).
     * @param review_style The 'style' of the APQC HTML output HTML. Allowed keywords are: {none, basic, pythonic}. Using 'pythonic' is recommended.
     * @param mot_grayplot_off Turn off the grayplot generation. This option was created for a specific case with a large dataset. Not recommended to use generally.
     * @param vstat_list Provide a list of label items to specify which volume's images should appear in the vstat QC block. Each item should correspond to subbrick label basename in the stats_dset. 'Full_Fstat' is always included. If not used, default logic picks up to 5 items to show.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `ApqcMakeTcshPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(APQC_MAKE_TCSH_PY_METADATA);
    const params = apqc_make_tcsh_py_params(uvar_json, subj_dir, review_style, mot_grayplot_off, vstat_list)
    return apqc_make_tcsh_py_execute(params, execution);
}


export {
      APQC_MAKE_TCSH_PY_METADATA,
      ApqcMakeTcshPyOutputs,
      ApqcMakeTcshPyParameters,
      apqc_make_tcsh_py,
      apqc_make_tcsh_py_params,
};
