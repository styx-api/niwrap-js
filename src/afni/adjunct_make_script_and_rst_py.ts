// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const ADJUNCT_MAKE_SCRIPT_AND_RST_PY_METADATA: Metadata = {
    id: "d715c1c643d7b006ced626bc661c6b0f3c88f4c5.boutiques",
    name: "adjunct_make_script_and_rst.py",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface AdjunctMakeScriptAndRstPyParameters {
    "__STYXTYPE__": "adjunct_make_script_and_rst.py";
    "input_script": InputPathType;
    "prefix_rst": string;
    "prefix_script": string;
    "reflink": string;
    "execute_script": boolean;
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
        "adjunct_make_script_and_rst.py": adjunct_make_script_and_rst_py_cargs,
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
        "adjunct_make_script_and_rst.py": adjunct_make_script_and_rst_py_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `adjunct_make_script_and_rst_py(...)`.
 *
 * @interface
 */
interface AdjunctMakeScriptAndRstPyOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated RST documentation file.
     */
    rst_file: OutputPathType;
    /**
     * Generated script file.
     */
    script_file: OutputPathType;
    /**
     * Output directory in Sphinx tree.
     */
    output_directory: OutputPathType;
}


function adjunct_make_script_and_rst_py_params(
    input_script: InputPathType,
    prefix_rst: string,
    prefix_script: string,
    reflink: string,
    execute_script: boolean = false,
): AdjunctMakeScriptAndRstPyParameters {
    /**
     * Build parameters.
    
     * @param input_script Input script file with special markup
     * @param prefix_rst Output filename including any path of the RST/Sphinx file. Must include file extension '.rst'.
     * @param prefix_script Output filename of the script file. Should include file extension such as '.tcsh'.
     * @param reflink A string tag that will serve as the subdirectory name holding images for the given demo, and the RST internal reference label.
     * @param execute_script Flag to create the RST and script files, and also execute the script.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "adjunct_make_script_and_rst.py" as const,
        "input_script": input_script,
        "prefix_rst": prefix_rst,
        "prefix_script": prefix_script,
        "reflink": reflink,
        "execute_script": execute_script,
    };
    return params;
}


function adjunct_make_script_and_rst_py_cargs(
    params: AdjunctMakeScriptAndRstPyParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("adjunct_make_script_and_rst.py");
    cargs.push(
        "-input",
        execution.inputFile((params["input_script"] ?? null))
    );
    cargs.push(
        "--prefix_rst",
        (params["prefix_rst"] ?? null)
    );
    cargs.push(
        "--prefix_script",
        (params["prefix_script"] ?? null)
    );
    cargs.push(
        "--reflink",
        (params["reflink"] ?? null)
    );
    if ((params["execute_script"] ?? null)) {
        cargs.push("--execute_script");
    }
    return cargs;
}


function adjunct_make_script_and_rst_py_outputs(
    params: AdjunctMakeScriptAndRstPyParameters,
    execution: Execution,
): AdjunctMakeScriptAndRstPyOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: AdjunctMakeScriptAndRstPyOutputs = {
        root: execution.outputFile("."),
        rst_file: execution.outputFile([(params["prefix_rst"] ?? null)].join('')),
        script_file: execution.outputFile([(params["prefix_script"] ?? null)].join('')),
        output_directory: execution.outputFile([(params["prefix_rst"] ?? null), "/media/", (params["reflink"] ?? null)].join('')),
    };
    return ret;
}


function adjunct_make_script_and_rst_py_execute(
    params: AdjunctMakeScriptAndRstPyParameters,
    execution: Execution,
): AdjunctMakeScriptAndRstPyOutputs {
    /**
     * Program to take a script with some special markup and turn it into both an RST page and a script for the online Sphinx documentation.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `AdjunctMakeScriptAndRstPyOutputs`).
     */
    params = execution.params(params)
    const cargs = adjunct_make_script_and_rst_py_cargs(params, execution)
    const ret = adjunct_make_script_and_rst_py_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function adjunct_make_script_and_rst_py(
    input_script: InputPathType,
    prefix_rst: string,
    prefix_script: string,
    reflink: string,
    execute_script: boolean = false,
    runner: Runner | null = null,
): AdjunctMakeScriptAndRstPyOutputs {
    /**
     * Program to take a script with some special markup and turn it into both an RST page and a script for the online Sphinx documentation.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param input_script Input script file with special markup
     * @param prefix_rst Output filename including any path of the RST/Sphinx file. Must include file extension '.rst'.
     * @param prefix_script Output filename of the script file. Should include file extension such as '.tcsh'.
     * @param reflink A string tag that will serve as the subdirectory name holding images for the given demo, and the RST internal reference label.
     * @param execute_script Flag to create the RST and script files, and also execute the script.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `AdjunctMakeScriptAndRstPyOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(ADJUNCT_MAKE_SCRIPT_AND_RST_PY_METADATA);
    const params = adjunct_make_script_and_rst_py_params(input_script, prefix_rst, prefix_script, reflink, execute_script)
    return adjunct_make_script_and_rst_py_execute(params, execution);
}


export {
      ADJUNCT_MAKE_SCRIPT_AND_RST_PY_METADATA,
      AdjunctMakeScriptAndRstPyOutputs,
      AdjunctMakeScriptAndRstPyParameters,
      adjunct_make_script_and_rst_py,
      adjunct_make_script_and_rst_py_params,
};
