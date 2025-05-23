// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const V_3DNEWID_METADATA: Metadata = {
    id: "b25222575203795168350c6d683d99ee6f9c65d5.boutiques",
    name: "3dnewid",
    package: "afni",
    container_image_tag: "afni/afni_make_build:AFNI_24.2.06",
};


interface V3dnewidParameters {
    "__STYXTYPE__": "3dnewid";
    "datasets": Array<InputPathType>;
    "fun"?: number | null | undefined;
    "fun11": boolean;
    "int": boolean;
    "hash"?: string | null | undefined;
    "MD5"?: string | null | undefined;
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
        "3dnewid": v_3dnewid_cargs,
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
 * Output object returned when calling `v_3dnewid(...)`.
 *
 * @interface
 */
interface V3dnewidOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
}


function v_3dnewid_params(
    datasets: Array<InputPathType>,
    fun: number | null = null,
    fun11: boolean = false,
    int: boolean = false,
    hash: string | null = null,
    md5: string | null = null,
): V3dnewidParameters {
    /**
     * Build parameters.
    
     * @param datasets Input datasets to assign new ID codes.
     * @param fun Generate n randomly generated ID codes. If n is not present, 1 ID code is printed.
     * @param fun11 Generate an 11 character ID code for use in scripting
     * @param int Generate a random positive integer between 1 million and 1 billion.
     * @param hash Generate a unique hash code of the provided string. The same string produces the same hash code.
     * @param md5 Generate the MD5 hash of the provided string. Output should be the same as the -hash output without the prefix and without the + and / char substitutions.
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "3dnewid" as const,
        "datasets": datasets,
        "fun11": fun11,
        "int": int,
    };
    if (fun !== null) {
        params["fun"] = fun;
    }
    if (hash !== null) {
        params["hash"] = hash;
    }
    if (md5 !== null) {
        params["MD5"] = md5;
    }
    return params;
}


function v_3dnewid_cargs(
    params: V3dnewidParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("3dnewid");
    cargs.push(...(params["datasets"] ?? null).map(f => execution.inputFile(f)));
    if ((params["fun"] ?? null) !== null) {
        cargs.push(
            "-fun",
            String((params["fun"] ?? null))
        );
    }
    if ((params["fun11"] ?? null)) {
        cargs.push("-fun11");
    }
    if ((params["int"] ?? null)) {
        cargs.push("-int");
    }
    if ((params["hash"] ?? null) !== null) {
        cargs.push(
            "-hash",
            (params["hash"] ?? null)
        );
    }
    if ((params["MD5"] ?? null) !== null) {
        cargs.push(
            "-MD5",
            (params["MD5"] ?? null)
        );
    }
    return cargs;
}


function v_3dnewid_outputs(
    params: V3dnewidParameters,
    execution: Execution,
): V3dnewidOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: V3dnewidOutputs = {
        root: execution.outputFile("."),
    };
    return ret;
}


function v_3dnewid_execute(
    params: V3dnewidParameters,
    execution: Execution,
): V3dnewidOutputs {
    /**
     * Assigns a new ID code to a dataset, ensuring internal ID codes remain unique.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `V3dnewidOutputs`).
     */
    params = execution.params(params)
    const cargs = v_3dnewid_cargs(params, execution)
    const ret = v_3dnewid_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function v_3dnewid(
    datasets: Array<InputPathType>,
    fun: number | null = null,
    fun11: boolean = false,
    int: boolean = false,
    hash: string | null = null,
    md5: string | null = null,
    runner: Runner | null = null,
): V3dnewidOutputs {
    /**
     * Assigns a new ID code to a dataset, ensuring internal ID codes remain unique.
     * 
     * Author: AFNI Developers
     * 
     * URL: https://afni.nimh.nih.gov/
    
     * @param datasets Input datasets to assign new ID codes.
     * @param fun Generate n randomly generated ID codes. If n is not present, 1 ID code is printed.
     * @param fun11 Generate an 11 character ID code for use in scripting
     * @param int Generate a random positive integer between 1 million and 1 billion.
     * @param hash Generate a unique hash code of the provided string. The same string produces the same hash code.
     * @param md5 Generate the MD5 hash of the provided string. Output should be the same as the -hash output without the prefix and without the + and / char substitutions.
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `V3dnewidOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(V_3DNEWID_METADATA);
    const params = v_3dnewid_params(datasets, fun, fun11, int, hash, md5)
    return v_3dnewid_execute(params, execution);
}


export {
      V3dnewidOutputs,
      V3dnewidParameters,
      V_3DNEWID_METADATA,
      v_3dnewid,
      v_3dnewid_params,
};
