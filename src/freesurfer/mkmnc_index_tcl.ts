// This file was auto generated by Styx.
// Do not edit this file directly.

import { Runner, Execution, Metadata, InputPathType, OutputPathType, getGlobalRunner } from 'styxdefs';

const MKMNC_INDEX_TCL_METADATA: Metadata = {
    id: "153ac6ba9dc33639bcc37f096fb83434f0b7cb92.boutiques",
    name: "mkmnc_index.tcl",
    package: "freesurfer",
    container_image_tag: "freesurfer/freesurfer:7.4.1",
};


interface MkmncIndexTclParameters {
    "__STYXTYPE__": "mkmnc_index.tcl";
    "infile": InputPathType;
    "outfile": string;
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
        "mkmnc_index.tcl": mkmnc_index_tcl_cargs,
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
        "mkmnc_index.tcl": mkmnc_index_tcl_outputs,
    };
    return outputsFuncs[t];
}


/**
 * Output object returned when calling `mkmnc_index_tcl(...)`.
 *
 * @interface
 */
interface MkmncIndexTclOutputs {
    /**
     * Output root folder. This is the root folder for all outputs.
     */
    root: OutputPathType;
    /**
     * Generated index file
     */
    indexfile: OutputPathType;
}


function mkmnc_index_tcl_params(
    infile: InputPathType,
    outfile: string,
): MkmncIndexTclParameters {
    /**
     * Build parameters.
    
     * @param infile Input MINC file
     * @param outfile Output index file
    
     * @returns Parameter dictionary
     */
    const params = {
        "__STYXTYPE__": "mkmnc_index.tcl" as const,
        "infile": infile,
        "outfile": outfile,
    };
    return params;
}


function mkmnc_index_tcl_cargs(
    params: MkmncIndexTclParameters,
    execution: Execution,
): string[] {
    /**
     * Build command-line arguments from parameters.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Command-line arguments.
     */
    const cargs: string[] = [];
    cargs.push("mkmnc_index.tcl");
    cargs.push(execution.inputFile((params["infile"] ?? null)));
    cargs.push((params["outfile"] ?? null));
    return cargs;
}


function mkmnc_index_tcl_outputs(
    params: MkmncIndexTclParameters,
    execution: Execution,
): MkmncIndexTclOutputs {
    /**
     * Build outputs object containing output file paths and possibly stdout/stderr.
    
     * @param params The parameters.
     * @param execution The execution object for resolving input paths.
    
     * @returns Outputs object.
     */
    const ret: MkmncIndexTclOutputs = {
        root: execution.outputFile("."),
        indexfile: execution.outputFile([(params["outfile"] ?? null)].join('')),
    };
    return ret;
}


function mkmnc_index_tcl_execute(
    params: MkmncIndexTclParameters,
    execution: Execution,
): MkmncIndexTclOutputs {
    /**
     * A tool for creating MINC indices.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param params The parameters.
     * @param execution The execution object.
    
     * @returns NamedTuple of outputs (described in `MkmncIndexTclOutputs`).
     */
    params = execution.params(params)
    const cargs = mkmnc_index_tcl_cargs(params, execution)
    const ret = mkmnc_index_tcl_outputs(params, execution)
    execution.run(cargs, undefined);
    return ret;
}


function mkmnc_index_tcl(
    infile: InputPathType,
    outfile: string,
    runner: Runner | null = null,
): MkmncIndexTclOutputs {
    /**
     * A tool for creating MINC indices.
     * 
     * Author: FreeSurfer Developers
     * 
     * URL: https://github.com/freesurfer/freesurfer
    
     * @param infile Input MINC file
     * @param outfile Output index file
     * @param runner Command runner
    
     * @returns NamedTuple of outputs (described in `MkmncIndexTclOutputs`).
     */
    runner = runner || getGlobalRunner();
    const execution = runner.startExecution(MKMNC_INDEX_TCL_METADATA);
    const params = mkmnc_index_tcl_params(infile, outfile)
    return mkmnc_index_tcl_execute(params, execution);
}


export {
      MKMNC_INDEX_TCL_METADATA,
      MkmncIndexTclOutputs,
      MkmncIndexTclParameters,
      mkmnc_index_tcl,
      mkmnc_index_tcl_params,
};
