// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const TEDANA_WRAPPER_PY_METADATA: Metadata = {
    id: "2a5d2d42a60628be534dad0f8a18d103f5db8377.boutiques",
    name: "tedana_wrapper.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface TedanaWrapperPyParameters {
    "__STYXTYPE__": "tedana_wrapper.py";
    "input_files": Array<InputPathType>;
    "echo_times": Array<number>;
    "mask": InputPathType;
    "results_dir"?: string | null | undefined;
    "prefix"?: string | null | undefined;
    "save_all": boolean;
    "prep_only": boolean;
    "tedana_prog"?: string | null | undefined;
    "tedana_is_exec": boolean;
    "ted_label"?: string | null | undefined;
    "tedana_opts"?: string | null | undefined;
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
        "tedana_wrapper.py": tedana_wrapper_py_cargs,
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
        "tedana_wrapper.py": tedana_wrapper_py_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `tedana_wrapper_py(...)`.
 *
 * @interface
 */
interface TedanaWrapperPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Output directory for tedana results.
     */
    tedana_output: OutputPathType | null;
    /**
     * Tedana report file.
     */
    tedana_report: OutputPathType | null;
}


function tedana_wrapper_py_params(
    input_files: Array<InputPathType>,
    echo_times: Array<number>,
    mask: InputPathType,
    results_dir: string | null = null,
    prefix: string | null = null,
    save_all: boolean = false,
    prep_only: boolean = false,
    tedana_prog: string | null = null,
    tedana_is_exec: boolean = false,
    ted_label: string | null = null,
    tedana_opts: string | null = null,
): TedanaWrapperPyParameters {
    /**
     * Build parameters.
    
     * @param input_files 4D dataset for each echo.
     * @param echo_times Echo time (ms) for each echo.
     * @param mask Mask in same space/grid as the input datasets.
     * @param results_dir Folder to be created for all outputs. Default [./Bunnymen].
     * @param prefix Prefix for dataset names. Default [Bunnymen].
     * @param save_all Save intermediate datasets. Default is to save only the 3dZcat stacked dataset (and tedana stuff).
     * @param prep_only Do not run tedana.py, stop at 3dZcat.
     * @param tedana_prog Path and name of the version of tedana.py that will be run. Default is meica.libs/tedana.py in the afni binaries directory.
     * @param tedana_is_exec Run 'tedana.py' rather than 'python tedana.py'.
     * @param ted_label Suffix for output folder. Adds suffix like TED.LABEL (NOT A PATH).
     * @param tedana_opts Additional options to pass to tedana.py. (In quotes) Example: '--initcost=tanh --conv=2.5e-5'
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "tedana_wrapper.py" as const,
        "input_files": input_files,
        "echo_times": echo_times,
        "mask": mask,
        "save_all": save_all,
        "prep_only": prep_only,
        "tedana_is_exec": tedana_is_exec,
    };
    if (results_dir !== null) {
        params["results_dir"] = results_dir;
    }
    if (prefix !== null) {
        params["prefix"] = prefix;
    }
    if (tedana_prog !== null) {
        params["tedana_prog"] = tedana_prog;
    }
    if (ted_label !== null) {
        params["ted_label"] = ted_label;
    }
    if (tedana_opts !== null) {
        params["tedana_opts"] = tedana_opts;
    }
    return params;
}


function tedana_wrapper_py_cargs(
    params: TedanaWrapperPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("tedana_wrapper.py");
    cargs.push(
        "-input",
        ...(params["input_files"] ?? null).map(f => execution.inputFile(f))
    );
    cargs.push(
        "-TE",
        ...(params["echo_times"] ?? null).map(String)
    );
    cargs.push(
        "-mask",
        execution.inputFile((params["mask"] ?? null))
    );
    if ((params["results_dir"] ?? null) !== null) {
        cargs.push(
            "-results_dir",
            (params["results_dir"] ?? null)
        );
    }
    if ((params["prefix"] ?? null) !== null) {
        cargs.push(
            "-prefix",
            (params["prefix"] ?? null)
        );
    }
    if ((params["save_all"] ?? null)) {
        cargs.push("-save_all");
    }
    if ((params["prep_only"] ?? null)) {
        cargs.push("-prep_only");
    }
    if ((params["tedana_prog"] ?? null) !== null) {
        cargs.push(
            "-tedana_prog",
            (params["tedana_prog"] ?? null)
        );
    }
    if ((params["tedana_is_exec"] ?? null)) {
        cargs.push("-tedana_is_exec");
    }
    if ((params["ted_label"] ?? null) !== null) {
        cargs.push(
            "-ted_label",
            (params["ted_label"] ?? null)
        );
    }
    if ((params["tedana_opts"] ?? null) !== null) {
        cargs.push(
            "-tedana_opts",
            (params["tedana_opts"] ?? null)
        );
    }
    return cargs;
}


function tedana_wrapper_py_outputs(
    params: TedanaWrapperPyParameters,
    execution: Execution,
): TedanaWrapperPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: TedanaWrapperPyOutputs = {
        root: execution.outputFile("."),
        tedana_output: ((params["results_dir"] ?? null) !== null && (params["prefix"] ?? null) !== null) ? execution.outputFile([(params["results_dir"] ?? null), "/", (params["prefix"] ?? null), "_ted_output"].join('')) : null,
        tedana_report: ((params["results_dir"] ?? null) !== null && (params["prefix"] ?? null) !== null) ? execution.outputFile([(params["results_dir"] ?? null), "/", (params["prefix"] ?? null), "_tedana_report.txt"].join('')) : null,
    };
    return ret;
}


function tedana_wrapper_py_execute(
    params: TedanaWrapperPyParameters,
    execution: Execution,
): TedanaWrapperPyOutputs {
    /**
     * Internal wrapper to run tedana.py, typically used within afni_proc.py.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `TedanaWrapperPyOutputs`).
     */
    params = execution.params(params)
    const cargs = tedana_wrapper_py_cargs(params, execution)
    const ret = tedana_wrapper_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function tedana_wrapper_py(
    input_files: Array<InputPathType>,
    echo_times: Array<number>,
    mask: InputPathType,
    results_dir: string | null = null,
    prefix: string | null = null,
    save_all: boolean = false,
    prep_only: boolean = false,
    tedana_prog: string | null = null,
    tedana_is_exec: boolean = false,
    ted_label: string | null = null,
    tedana_opts: string | null = null,
    runner: Runner | null = null,
): TedanaWrapperPyOutputs {
    /**
     * Internal wrapper to run tedana.py, typically used within afni_proc.py.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_files 4D dataset for each echo.
     * @param echo_times Echo time (ms) for each echo.
     * @param mask Mask in same space/grid as the input datasets.
     * @param results_dir Folder to be created for all outputs. Default [./Bunnymen].
     * @param prefix Prefix for dataset names. Default [Bunnymen].
     * @param save_all Save intermediate datasets. Default is to save only the 3dZcat stacked dataset (and tedana stuff).
     * @param prep_only Do not run tedana.py, stop at 3dZcat.
     * @param tedana_prog Path and name of the version of tedana.py that will be run. Default is meica.libs/tedana.py in the afni binaries directory.
     * @param tedana_is_exec Run 'tedana.py' rather than 'python tedana.py'.
     * @param ted_label Suffix for output folder. Adds suffix like TED.LABEL (NOT A PATH).
     * @param tedana_opts Additional options to pass to tedana.py. (In quotes) Example: '--initcost=tanh --conv=2.5e-5'
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `TedanaWrapperPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(TEDANA_WRAPPER_PY_METADATA);
    const params = tedana_wrapper_py_params(input_files, echo_times, mask, results_dir, prefix, save_all, prep_only, tedana_prog, tedana_is_exec, ted_label, tedana_opts)
    return tedana_wrapper_py_execute(params, execution);
}


export {
      TEDANA_WRAPPER_PY_METADATA,
      TedanaWrapperPyOutputs,
      TedanaWrapperPyParameters,
      tedana_wrapper_py,
      tedana_wrapper_py_params,
};
